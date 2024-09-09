export function recommendGigs(userProfile, allGigs) {
    const userSkills = new Set(userProfile.skills);
    
    return allGigs.map(gig => {
      const skillMatch = gig.skills.filter(skill => userSkills.has(skill)).length;
      const skillScore = skillMatch / gig.skills.length;

      const budgetScore = userProfile.budgetRange 
        ? (gig.budget >= userProfile.budgetRange[0] && gig.budget <= userProfile.budgetRange[1] ? 1 : 0) 
        : 0;

      const durationScore = userProfile.preferredDuration 
        ? (gig.duration === userProfile.preferredDuration ? 1 : 0) 
        : 0;

      const clientRatingScore = gig.clientRating / 5;

      const totalScore = (skillScore * 0.4) + (budgetScore * 0.2) + (durationScore * 0.2) + (clientRatingScore * 0.2);

      return { ...gig, score: totalScore };
    }).sort((a, b) => b.score - a.score);
  }