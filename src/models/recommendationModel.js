import * as tf from '@tensorflow/tfjs';
import * as tfrs from '@tensorflow/recommenders';

// Mock data for freelancers and gigs
const freelancers = [
  { id: 1, profile: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], name: 'John Doe' },
  { id: 2, profile: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], name: 'Jane Smith' },
  // ... add more freelancers
];

const gigs = [
  { id: 1, features: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], title: 'Web Development' },
  { id: 2, features: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], title: 'Logo Design' },
  // ... add more gigs
];

// Convert data to tensors
const freelancerProfiles = tf.tensor2d(freelancers.map(freelancer => freelancer.profile));
const gigFeatures = tf.tensor2d(gigs.map(gig => gig.features));

// Create and train the model
const createModel = async () => {
  const model = tfrs.models.Model({
    user_model: tf.sequential({
      layers: [
        tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }),
        tf.layers.dense({ units: 32, activation: 'relu' }),
      ],
    }),
    item_model: tf.sequential({
      layers: [
        tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }),
        tf.layers.dense({ units: 32, activation: 'relu' }),
      ],
    }),
    task: tfrs.tasks.Retrieval(),
  });

  model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

  // Mock training data
  const trainingData = freelancerProfiles;
  const trainingLabels = tf.tensor2d([
    [1, 0], // Freelancer 1 prefers Gig 1
    [0, 1], // Freelancer 2 prefers Gig 2
    // ... add more training labels
  ]);

  await model.fit(trainingData, trainingLabels, { epochs: 100 });

  return model;
};

export const loadModel = async () => {
  const model = await createModel();
  return model;
};

export const getRecommendations = (model, freelancerProfile) => {
  const inputTensor = tf.tensor2d([freelancerProfile], [1, freelancerProfile.length]);
  const prediction = model.predict(inputTensor);
  return prediction.dataSync();
};

// Function to normalize the prediction scores
const normalizePredictions = (predictions) => {
  const sum = predictions.reduce((acc, val) => acc + val, 0);
  return predictions.map(score => score / sum);
};

// Function to get top N recommendations
export const getTopNRecommendations = (model, freelancerProfile, n = 5) => {
  const predictions = getRecommendations(model, freelancerProfile);
  const normalizedPredictions = normalizePredictions(predictions);
  
  // Pair gig indices with their prediction scores
  const indexedPredictions = normalizedPredictions.map((score, index) => ({ index, score }));
  
  // Sort predictions in descending order and get top N
  const topN = indexedPredictions
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
  
  // Map top N predictions to gig objects
  return topN.map(pred => ({
    ...gigs[pred.index],
    score: pred.score
  }));
};

// Function to update model with new data
export const updateModel = async (model, newFreelancerProfiles, newGigFeatures) => {
  const updatedFreelancerProfiles = tf.concat([freelancerProfiles, tf.tensor2d(newFreelancerProfiles)]);
  const updatedGigFeatures = tf.concat([gigFeatures, tf.tensor2d(newGigFeatures)]);
  
  // Retrain the model with updated data
  await model.fit(updatedFreelancerProfiles, updatedGigFeatures, { epochs: 50 });
  
  return model;
};

// Function to evaluate model performance
export const evaluateModel = async (model, testData, testLabels) => {
  const evalResult = await model.evaluate(testData, testLabels);
  return {
    loss: evalResult[0].dataSync()[0],
    accuracy: evalResult[1].dataSync()[0]
  };
};

// Function to save model
export const saveModel = async (model, path) => {
  await model.save(`file://${path}`);
};

// Function to load saved model
export const loadSavedModel = async (path) => {
  return await tf.loadLayersModel(`file://${path}`);
};