import React, { useState } from 'react';
import './FindGigs.scss';
import { FaHeart, FaStar, FaTimes, FaChevronDown, FaSearch } from 'react-icons/fa';
// import Gigs from "../pages/gigs/Gigs.jsx";


const FindGigs = () => {
  const [selectedGig, setSelectedGig] = useState(null);
  const [filters, setFilters] = useState({
    deliveryDay: [],
    category: '',
    minRating: 0,
    niches: []
  });
    
    const handleApplyClick = () => {
    history.push("/gigs"); // Assuming the path to Gigs is "/gigs"
  };

  const featuredGigs = [
    {
      id: 1,
      title: "Video Editor Needed for YouTube Channel",
      description: "Looking for a skilled video editor to help with our growing YouTube channel.",
      budget: "₹44,028 - ₹88,056",
      duration: "2-4 weeks",
      skills: ["Video Editing", "Adobe Premiere", "After Effects"],
      clientName: "TechTube Inc.",
      clientRating: 4.9,
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      title: "Web Developer Needed for E-commerce Site",
      description: "Seeking a web developer experienced in building e-commerce platforms.",
      budget: "₹66,042 - ₹1,32,084",
      duration: "1-2 months",
      skills: ["Web Development", "React", "Node.js"],
      clientName: "ShopSmart Co.",
      clientRating: 4.8,
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qBNlFWQ9G_RPVm7tbZaXOw.jpeg"
    },
    {
      id: 3,
      title: "Graphic Designer for Logo and Branding",
      description: "Need a creative graphic designer to develop our new brand identity.",
      budget: "₹22,014 - ₹44,028",
      duration: "3-4 weeks",
      skills: ["Graphic Design", "Logo Design", "Branding"],
      clientName: "BrandMagic",
      clientRating: 4.7,
      image: "https://vakilsearch.com/blog/wp-content/uploads/2022/05/create-logo-design-online.jpg"
    },
    {
      id: 4,
      title: "Content Writer for Technology Blog",
      description: "Looking for a tech-savvy writer to produce high-quality content.",
      budget: "₹16,510 - ₹33,020",
      duration: "Ongoing",
      skills: ["Content Writing", "SEO", "Tech Writing"],
      clientName: "TechInsights",
      clientRating: 4.9,
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 5,
      title: "SEO Specialist for Online Store",
      description: "We need an SEO expert to help improve our online store's search engine ranking.",
      budget: "₹33,020 - ₹66,042",
      duration: "1-2 months",
      skills: ["SEO", "Google Analytics", "Keyword Research"],
      clientName: "FashionFiesta",
      clientRating: 4.8,
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/A-day-in-the-life-of-an-SEO-specialist.jpg",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/A-day-in-the-life-of-an-SEO-specialist.jpg"
    },
    {
  id: 1,
  title: "Frontend Developer for E-commerce Platform",
  description: "Seeking a frontend developer to enhance the UI/UX of our e-commerce platform.",
  budget: "₹55,036 - ₹1,10,072",
  duration: "2-3 months",
  skills: ["React", "JavaScript", "HTML/CSS"],
  clientName: "ShopEase Inc.",
  clientRating: 4.8,
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKABMgMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgAEAwUGB//EAEIQAAEEAQIEAwUEBgkDBQAAAAEAAgMEEQUhEhMxQQZRYRQicYGhBzJCkRUjsbLB0SQzUnKCkqLC4SV0gxY1U2Jj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QALBEBAAICAgICAQMCBwEAAAAAAAECAxEEEiExE0EiFFFhM3EFIzJCgZGhcv/aAAwDAQACEQMRAD8A40r7T4AIqIAgCKigBRQRQUUCgCKBUUqBSoqI0CBVFBFKVGg7oFKLCFRSoQCjRSgBSVKVFhFFKioUUCoAUUqLAFRQQBFQoAgiK6ldj4ZUVEAQBFBQRFAooKKBRQQKVFBAFFKUaBBCopCigo0UoIUWAKilQgCo0BQBJUpUWCqKCKhRQKgUoAUagCoqIFRUKAIIiupXY+GVFRAEERQUUCgBRQUUEUEAPRRSoFKiojQFAqilKKUqNIgUosIVFKhAKNFKSAVFBFgqjSFACigVApRQKLCKKVUBRUKAIIiuoXY+GCKiAIAiooAigUUFFBAEUpUUEClRURoO6AFRSooFRovdAEWClRQQgFGilACkqCysFKNAUUCoFKCIoFFgCooFACioUAQRFdQux8MEVEAQBFRAFFAooKKCAIoFRSoFKigeiNAgCilKLAHqo0HdApRYRRSlCAUaKUAKSpSsrBSjRSUUMqCZQAoqKLAFFRAqKhQBBEV1K7HwyoqIAgCKCgiKBRQUUCgCKB6KKVAFFKUaBAFFKUUFGgKAFFgFFKUIBRoEClJUpWVhjKNQUlRS5QEFFFBEWAKigUA7oqIAgiK6hdj4ZeIeYRrQgg9CiB16IoIIigoAigooIoIpe6ghKBCosJhGg69EC91FRrXPdhjS4+QGVaxMzqCZiPYPa5hw9pafIjClqzE+VrO/TGVGkKLAKKUoQCjQIpT1SQpUlqGNyypMIpSUAa5rncLXAu/sjclFXIdPvz/1VC2715LgPzUm0LESss0LUuskMUPrNYYP4krM3rHtdSR2nwREixq2nMI/CyRz/wCAUnJWPS9ZV3O0mPZ2oTSHvyoMD8yVPmhesleaUkIfUNgHix+u4cO+GArW3bymtMB+C2AgiK6krsfDdnLZi0/Q6th1ZkpLIxgYHUDddUzFaxOnwqY75uRanaY8y5/WNXi1CBkTKvJLXcRORvt06LxveLR4h9Lj8a+Gd2ttjfoV4GJoja4zDLS12wHr5J8V9w3+sxamZn0w2dLtV7rahAfK5oIawk9VJxzFurdORjvjm/7LX/pzUeXxYhJ/s8Zz+zC38F3jHPw701hryCwK0jHNkLw3hd5k7Ly6z26y7IyV6d49Lo0DUDM6HgjAaAS/i93yx0znZekYMm3P+swxG9q9/TLVAAzNaGE4Dm7hYvivj9vXDyKZtxDY6bonMoySWIhzXj9SC77u3oujHx90mZc2fl9csRHpqb9Gai9rLDWguGQWnK58mO1PEu3FlpljdVQ7ei8nqv1tIuWIhK1jGNPTjOM/kuinFyWjfp4X5WOk6VrlGxScPaGAAnAIOQV55MVsf+p648lcsfjJxpdt0MMjGtLZB7uD0zvk/ktxxcs1iY+2Z5OOLTv6NY0e3DEZHBjg0ZPCckfRatw8ta7lKcrHedKVaB9mTggYS4dSegXhixXy260e98laRuzaUtNs1bsckgYWb5LTnC7sHFy48sTPpy5c9L45iFPWz/1B/wDdC5+b/Vl78X+lDX91yOgpRYRRSuIHU4+KEDEx8+0DHynyjaXfsU3DWplnGm3yD/Q5mDzkHL/ews9qfctdZB9B8TM2LVKD+/YDv3crE5aNdLSxtgpEYOqMkd3bVrvl/ksTmq1GOfsCNNxlvt8wzgnDIR/qys/P+0N/GxTWdPjIApR/+e04/ubLM55a6QH6SYMvgr02Bg3dHV5gb/iKxOW0nWDnVtULBypbEQxkFvBE0+WxU72ldRCrY1mVjmCeIyShu7jaecn4A4WfKkFrUZDzItOYM/de2rk/5sIK9uvfsv5losLh1LpWjHyygxx0svH62NzRu4sJ2+i1Ws2lJlccRsGjDQMAeS64iIjwwBVAQRFdSV2Phu1sS1INCqSXoedDy4xjAO+B5rrmaxSOz4GOmS3JtFJ1O5c1q9nTrDIxp1YwOa7LiWAZHyXje1Zjw+rxseam/ktv/lv9buTU9IgNd3A97Wt4vLbsvbJbrSJh8/iY65M9u3ryo+FXvs27E9iQySNYAHPduAsYNzMzLo/xCsUx1pHiFKLULTteaTK/Bn4Czi2wTjGPgp3tGTTotgxzx/X17W9eja3XqDm/fe9nF64fhbyx/mRLw4lptx7R/cviu1NFJXjjkcxpBceHucq8m0xMRCf4djpes2t7NqDnS+FonvPHJwRnPzAKuTc4FwxFeXaP7ppb3u8PTvLzkcYDidwMBaw2mcM+V5FKxyohoqMYvWQy3ZLG8JIc9303XHij5LflL6GSZw03SqzY02tXfCYrjZuKQAtDgdsr1tgpXWrbeVM97bia6bTWY6zxFHNcdXAzhrR1XXyIrMRFracnGteJtNa7UdTsVH6WIG2RNIzGCep9ei8s+XHOLrFty6OPjyRm7TXUMk0r4fDsboncLjGxufTZel7zTixpmtYtyZ3+7H4ekkkgma9xeA7OCc9U4N5tWYtL05dIreNQxeHWgRTOAHFkDr2AWeBERW8ry7TusKenWp5NRaHyPdxk5B6Lw42a88jzL3zY6xi9MOuf+4P/ALoWOb/Vl6cX+lCguR0AgyVXMbO0vjZJ14WSH3S7txeixffXw3TW/LHW1i4+SRkUba8zCeOKnpzctwcbkbrhm958OvrX2ae/qUrcWJ7zmH8E91keflsVPylY0oNkjkkMbjTDwce/LLLxfAbgrMweWcNbG7Z0jD3dFp7Y/wDUSi6limsxhjnSmzI0fhfcYc/Joz9UNK8VioGF5jqs4js0h8rm/JxwiidSjjyYZXNP/wCFdkJP5ZUGGbUucMSc+YeU0xx9MKitLZa+PgELGDz3J+ROcIMjNTuRxtZFYdG1owAzYIK8lid7svlkJPckoBHG6V4a33nk90jz4G0ja2Fgjj3x1d5lddK9YYmdifRbhAKAIIiuoXY+G3ep6tWs6LBUiEgmYGZJaMbDzyva991iHz8HGvj5Fsk+vLRryfRlu9Z1Wtd0+CCLmcTMcWWjy+K9cmSLREQ4ONxr48tryoaVqL9Otc1o4mkYczzCxjv0nbp5GCM1dNv+lNE55uitJ7Sd8cPf88fNe/yYons4v03K6/HNvDUWdTda1SK3KzDI5GENG5DQQdvXqvG2TteLO3Hx/jwzjj7Pr+oQ37ET6/MDWMI95uO/xWs+SLzGmOHhvhrO2WxqleTQ2UmCTnNawbt22IPmk5a/FFPtK8e9eTN59SGjapXrVn1bbXctxJyBnr2IWsOata9Lejlca97xkp7UdTfQc5g0+N7GNB4uLO5+ZXlmnHM/g6cNckRPyypA8Lg5oOQcjdeW5e2olujqlG5A2PUoHFzfxNHf0wu79RiyV1khxfp8uK3bHKjfl0/lNj0+KQPzkvd5fMrwzWwzXrSHvhrmi0zkk9jUIJNGjqt5nNaGDJG2y9MnIpPHin2zTBaM83n0GkX4KTJWzNcS4jBaAnE5FcMTFmuRgtktWYV9Ku+xPcHgujfscdQvPi8j4ZnfqW82D5YjXuFp1/TobPNrQO43H3n4xgfmuj9TgpbtWPLzjDmvXVp8NdqdiOxadLEDwkADIXHyMkZMk2h0YKTSmpUXy8P4T+S5pl0RDE6c9gs9moqR07jtt6qdmurFZb7U0Tj3rEIHNBH9ZGPxbd29/TB7FcuSsx5h0Y7fTBLaqsaeS8l2PdHscbRn+8SSvJ67SO5LL7sTLUru7ecSPyaAhtgsRylvvVRBv+JzgT/mKJs0OmzTjLOD/BmT90HCAy0BAWixI5jndAY8fvEJ7DNpQluRzH+ZBOP9LXD6poB8ULMDlR+vE/f6uH7AhsebBGSWGIO27A4/0n9qIxSzGy4NfPPJjo0NyB8N0VI6NiYf0ejaf6hpP7Ar1sm2evXNYODxiU7EeXovfHj15lmbMv0XsyiKiAIIiupK7Hw2zOiPZHG6S/RhMjQ8NklLTgj1C9Pj17lyRzImZ1SZ1/EK17TLNJvOeGPid0lhdxNPzUtSY8vXFnpknrHv+VI7DJWNw6NSGEAUVEPXkpx3OBnCT4X2t6bTF6xyTJyzwl2R3wt469rPLLl6U7f8KZJwMHr12Xm948gi+gI2UClFKoQCqgfLvjKkqCilKigEUpAPqktQQ1gWF4YeEbEjoFPj3Hb6XvqdMD67+xC8po3FlcunryNljyx7HZa8Dp/D5Hr0XnatnrWYZMwxPE0HuV5egbtypO7SctOO4y7p5kFc9o09onZnOY4Diexwz3dx/TMn7FlQe5rYuFrWjJwcN4Mj5CPP1V0C57py1gBldnADiH/kDxn6qaFyroGryAmtpt/B6lsEjR8c+40K6Rsovs9166QXac8DzfYjH7OJyuhs6/2U6jwl07aULRvkukefrwhWIJWG+ANPqvjbb1qpG95HAxrImOdvjbJcTvsr1TaO0fwzXhLjqlqwOIN91ziASCRjhDR2W4iE22FvVI5HMrMjskBgHG9uG/dyO69aTCS4TxI3Gplwx77AfmtyjVKCIqIIgiK6grsfDbfxF10//tGL1yfX9nFwtfn/APR/Dh5vtlOTLoZIS4tz0PmmOd7iTmRFYrkj3EsWlU2ewSXpKrrTg7gjiGcE9ycJjpGt6a5GXeSMe9fuyzVW2aE07tP9kngIdhrSGSN8iCtTXdZnWtM1yfHkilb7if8AtT1uCGN8FmqwNrzxhzWt7HuFjLWPGnvxbWndbe4lms0I/aKGnRta2dzeKeQddxk/RamldxT/ALeWPPaKXzfX0ylkbLQrfod3sodwcwtcXkZxxZ/gtxWN9Yp4/dntM07/ACfkTTapp+IJa4ORG13CT3GMqY69csw1myfJx62UdMrw+zWLtpnMjhaA2POOJx6LGOtZrNp9PfNe2646+5Z6xr6m51c1Yq8nCTG+Mnr5FWs0yz1mup+mckXwRFotuPth06Cv7LcktxB5hx0O/wAEw0p0tNvOm89796xTxs1V1bUS6s6pFC8tJjfGTkEdirTpl/HroyRfD+fbcfbFQhruq25LUfFyS3HCcFMNKTW0386azXvFqxT7ZKhqX452zVWQ8pnHxQk54R2K1j+LNE96+kyfLimJrb3+7HTdXvyOrOpxRcTSY3tJyDjbKYrUyz8fXS5Ytijv2/uwadWZJHLZkidMIgMRt/ESvPj4otFrzG9PXNkms1rE62yCv7VBK19MVnsbxMe0EA+m69fjjLSd01LE2mlo1fcMEDYG6YZ5ohI4PwN8Z9F50jH8E3tG/L0tN/l61+0BhtVZjyGRSxAFrmHY/FI6ZaTPXUwv5Y7RG9xIxStZpTyYGOAkAI7H1Vx5KxgmdJatvl1trZXcTyQGtBPQLjm23VWNQxlZadF9nVKnc8WwxXIWvi5T3iMjLXOaMjI77ZOPRc+asRG3tjmXpurX9EqWP0DPWPFahDXQw19ix2R1GB2Pw2XP4ezloptCq0RZp+C5ccwMAuMij7E8WTxbbYRV6XxPPVkvQVKekVo4IuJpfZMx3AxxMZuB1QVovF12WxprBqlSN1iMyObUon9YMFwwX7jYINXJ4lnt6UJZdS1yZst3lHgcK72DbIHBnIwcqoz2IrFmbUf+kzTSjgja6xI+US5zkDGN8hnTzQYoorELoHMg0+vFDWAJywmGUsLgPeJd/WcX1VSQxZj5IdqLGOi9+RsXE0PZkEdBgnf6LSNTwRstQPEs0hfghzmAbEkdc57LdfZLVeLWcNiGTGDghe12YaELDRggiCIqIOoK7Xw3R6lp0t+KjJXkhDGVWMIdIAc4Xvavb/p83ByIxzeLRPufpXa6DR6szGTsnuzN4QIzkMCm4pXcPWYvybx2jVYLpU3N0yShFY9nsNfxxu4+Hj9MqUn8eu1z065oyzG4YrlbU4a8jrdw8v8Asc/i4vkFJi0R5lrHfDNtVr/4zaMYblRsFlzW+yy80Fx6s6kfmFvHMWr5Z5EWx5JvTz2jX/KjFqQbrY1CQHh5hJHXDSMfsWIv/mdntPH1x/ij9l2xV1J8z5al8vge4ua4WMYHlhelq3mdxPh5Y8mKIj5KeY/hg0g8vWZDYnEjg1wMvFkO2x1WcM6yzNpbzxvBHWP28K+lSMlp2KMkrWOlwWOccDiHZTFMTSaPTkV63rkjzpno1Dpkj7dx7GhrTwNDwS8lbx0+KZtMsZcvy1jHSCaXwT0dQEjgzjP3j0BTD+VLfTWfdMlNeUo1jpspt23xgNaeAB4PEVcVPit3tKZckZa9KRPlWpuB0vUDkZdwnHfqsY7R8V3res/LT+C6QQGXsnGazgPU4TjzERff7N8isz11+5dEcBqLCXADgdkntsVOJMRm3P8AK8qJnHqE0yXNeeqZeU5+CyTOMEditce/i1InW0zU3Nb63EBPBqEcbnzWMNA/+XPElqZoie1vH92otimY1X/xi4m/odwBGeb0XnuP02v5aiJ+aJ+tFokCC2CQMx7eqYLRFLxP3DWSJm1dDVYbGnzQsLePjBwT1WsUdsU1ifOy8zGSLfwoyMdG4sd1B6A5+q5bRMeJe8TvyxrKt54Dl5HjPSXZwHTGP/M1zR9SF45v9L1x+3Z/aRZj03WtLuy3rcMYhcTXhyRJwuySRkN/EOq5fp0Q46lT0qSCrQZHfmj1KUWuPZnARxAAkZz0UVcjdYtVX3qvh5xM0zYZ2T5dmLA97bhI/n2QWpxqAsWKsB0urKGN/RvE+Mv4BniI4s5GEDQ2pIX0LL9djbV5YrSxQMeGunLOEnDQB94gqoWJtQt5di1dsz6ZYbK9xYDx8Ti4NBySMFnfzCpLKBTxLw0bDo54Y53ufL9xwjLmt2H/ANy3qpM6jZFZmYg1myK0EVr2OBoaGxyuAP3Mho6k9sdlmuaJh7WwWrOpa97XvhY+d8beCQcGI8bb5+6PPC9aZYsxkxWq1/jWDhqwScJ92T+C6p9PH05LosKmUBCAhFRB1C7XwwLWnJwD33HVVfKbdOykn8Bjz+SL4+y4A3GEI8ekwO/ZTyvv2hQgpAHTr8EX78hjGMbY6eii6/cfMYRY8EwAdhj4JPlYXaliOLTrkT/vyY4QB1XrTJEUtE/bwvS1slbfsoDA6DuvF0FO5/knmDwDxnHp3yp5j01EbDHYgHHTKRuD+4d8eXRTSx4KQB0x8k2RGgd1zgEp5aA/8lRSn5ZUjcGoQ4x690aKhCzpM/susafZJwIbUTyfQOC88kbrL0pOrPV/tSD4qFOeOzWrBszozJOGYORnHvA/2fouJ0w4VntNivXoP18tnsvbPA+CN4HAA4EAswBuMorE6xpV42rwl1C0y69tR7Q0HgIA94HOfM/NBcghjjszGvo1h9nSo2w1nSSuxI0hzTlpAHQ+fdCV2vD7KacLtO02pUdDzpxK8DgnMfbJPcAKoyDUpmVoZLOqVmWBOXzPhjB4mcXEM8A37j5KpM/seeozWdBnqNsSPfC90T2tO5fGcHY9zj6+q4+01vqfT6MxGTHGvatoErNRrxVJg5ry10UjLA9/3MA5HrkK2jrO49SY7d66t7PZ0x+nXjVB/okjQIXE5OcHLfpn5rVfeyY+pc/rsMzmS0eJzm4D2Fxz36Lpped6c2THEx4ciRgkHqNl0ub0iCAoogoDlB1K7XwwKKCCIAiogCigUUFFBFBAD0UUqBSoqI0CAFRSopSo0CBSiwhUUqEEfkNJHUbrF/Tdfb2fx45t/wAFR220xcc50ErY9z9/Ynb0euJ0x7clVqas63SdS0WGKAUf1b2Q4dDIc+Z8/Tuilk8NeM72kU44XMrTNdJzhlrCckcHQdhsir+pfZvreralLZn1flRSYPKkL3Y2APfHZRJbKj9lkEWOdqMhx2YwYWkbyD7O9GazEnPlOMEOfsfkps0p3tEq6FqT7UMPDFYkL5h5vPU/MrwzU35dfHyanqra5A2ONt+lCH+8DJwj3gNt/oAV49vxdPTVk1Jvt+nMfE5plY5sjTjtnf8AMK1t4Jrq25crrdZwsMmI/AWkeS6cc+XPaPDz2wzgnlb5PK7Icc+2JETKKgKA5VHWLtfDKiogCAIqIAooIoKKCAIoHoopUAKigjQIAVFKilKjRSgiLBSooIQV+7SPNRqHuvg6yLPhfSpev9GY3/L7v+1cExqZdTfsLR2+iBzKBjcfmiwxyXImSZc8AYQZnX6rKkljnN5UYy4g5U3C9bemnZ4j9qrSWKsLzy3BrmnyPQ/RY+XxOnv+ntFoiZ9sOs3fbNNeJ4MNwf1jXcQG22Vn5YtGpbtxrUtuJ20fhm665F7OX7ZLXeWxwue3iXbT8qbbWzQbBvFjhHYd1Yhnt+7l9drnchdFJc1o8vNNcg5V1zsYD912Unw47xqWtK0yVBEByg61dz4ZUVEAQRFBAFFBFBRQQBFAqKQoIooFGgQKopSigo0UoIiwUqKCEAivYfsvn5/hKu3I/UyyRfXi/wBy4bxq0uqPUOh1DURUHvD/AJWJnUN1r2nTnoNRu6xckgqNDGxuw53F3XhOaZ8Q668aI8yrivas6rLW5zhXb7uc5JPdefa2nvFKLetVuTWbpsBxxFvGR+I9f5q+YruZTxa2oh1PhmtFFRk4wBxEMPF0OB/yvTBHuXjy5ntGlHUarNJmfLC3mUpTiSMDPB6/BYyYv90Ljzdo6S5enpzdN1yyyu7FWw4TwnsCR7w+g/NeEy7XSskJY5sm/l6LUS8rV20eq18scMZx3XvSXjaNPN/FdQtj5mPuO3+C7MUuTJVyu269niUqKiCIOuXc+GVFRAEERQQBRQRQUUCiggBUUqBSoqI0BQKopSilUaAoIiwBUUpQgCor0X7K9bpU6F2jdsxQOE3NZzXBocCADgn4BcuWk9tuikxpv9R8QaM+7Axmo15JS8NDGnizn1Gy8MtZ6ujBeIuOhs9j8QW43DET3CRhHquLb6Xta8PxPOqXXP6CUlvwykSkxEQeSD2jW3OcHhjSep+8T3VtbtGilev5OM1HW9Z1DxLfp6bfkrabUfwHlAAlwAB3+K6YmK1iNeXN8c5bTafUOX8SeKdRuWuRX1S6+GMFshdMcPd3wF1Y8c6/Jy5bVi34H0vxhPA2KG9khmzZWjf5rnycTz2h74+X/tl3ul+IYbcIBkbuNjnZctqzV2UvFm0eRNDknKVsl6uR8Q0hIx7SNnDC6sdvLlvXbzWeN0Uro3jDmnC7Y8uSY1LGQoEKCIOtK7nwwKKiAIJlFBFBQBFBRQKKCAFRSlApUVEaBAqilKKCjRSgiLBVFAoQBRohAOxGyijnllr2bFrg7b0KxeN1mJapOrRL16ldLq4nd/WBg39CF8KY8y+9XzDbaXabWgc8/fkOxSFmPCMtMYbE735kDSeHHVbhN6ea+INQbotEw1yBbsnJPx6uP5rpwY5t5lzcjLFY61cTEABhfQfNk5xjGED17Vik7mVXluDu3Ox+IWL462h6UyWrL0bwlr/t0AZk5GzmnsV8rLSaS+piyfJDc6lX5oyBkYXpjszeunnPiyiYbAsgbH3XELuxzvw4cka8ud+PVerzAqAIOsXc+GCKCCFAEVFAEUEUFFAoAigVFIgBUVEaAoFUUpRYDuo0UoIiwUqKBQgFGilAshxG4jqB0Ut6aj29RpEy1oQMbxN4vyXwbe5fep/phflkcY2N6Bg7JCzLVatrbKdaSWT8Dd8dcr3x45tLwvk6xt5ZeuTX7klid2XOO3k0dgF9KlYrGofPvabTuStWmJMEIQjKo2Hhe46jq7Q07SjH+LsuTkY9xt04MkxbT1qnKLVYO9F86ttS+jaImGg8Q6Y2aCRhGzgu3Hdx5KPNbELoJXRSfebsuyJ3G3JMa8MWFQMIP//Z"
},
{
  id: 2,
  title: "Full Stack Developer for SaaS Application",
  description: "Looking for an experienced full stack developer to build a scalable SaaS application.",
  budget: "₹88,056 - ₹1,76,112",
  duration: "4-6 months",
  skills: ["Node.js", "React", "MongoDB"],
  clientName: "Techify Solutions",
  clientRating: 4.9,
  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qBNlFWQ9G_RPVm7tbZaXOw.jpeg"
},
{
  id: 3,
  title: "Backend Developer for API Integration",
  description: "Need a backend developer to integrate third-party APIs into our platform.",
  budget: "₹44,028 - ₹88,056",
  duration: "1-2 months",
  skills: ["Node.js", "Express", "API Development"],
  clientName: "API Experts Ltd.",
  clientRating: 4.7,
  image: "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid"
},
{
  id: 4,
  title: "WordPress Developer for Custom Themes",
  description: "Seeking a WordPress developer to create custom themes and plugins for our blog.",
  budget: "₹33,021 - ₹66,042",
  duration: "3-5 weeks",
  skills: ["WordPress", "PHP", "CSS"],
  clientName: "BlogMastery",
  clientRating: 4.6,
  image: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg"
},
{
  id: 5,
  title: "Web Developer for Landing Page Optimization",
  description: "Looking for a web developer to optimize our landing page for better conversion rates.",
  budget: "₹22,014 - ₹44,028",
  duration: "2-3 weeks",
  skills: ["HTML", "CSS", "JavaScript"],
  clientName: "Conversion Pros",
  clientRating: 4.5,
  image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg"
},
{
  id: 6,
  title: "React Developer for Dashboard Interface",
  description: "Seeking a React developer to build a responsive dashboard interface for our admin panel.",
  budget: "₹66,042 - ₹1,32,084",
  duration: "3-4 months",
  skills: ["React", "Redux", "Material UI"],
  clientName: "AdminPro Inc.",
  clientRating: 4.8,
  image: "https://img.freepik.com/premium-photo/react-js-programming-language-with-laptop-code-script-screen_1020200-5398.jpg?semt=ais_hybrid"
},
{
  id: 7,
  title: "Vue.js Developer for Single Page Application",
  description: "Need a Vue.js developer to build a single-page application for our project management tool.",
  budget: "₹55,036 - ₹1,10,072",
  duration: "2-3 months",
  skills: ["Vue.js", "JavaScript", "API Integration"],
  clientName: "ProjectHub",
  clientRating: 4.9,
  image: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?semt=ais_hybrid"
},
{
  id: 8,
  title: "Backend Developer for Microservices Architecture",
  description: "Looking for a backend developer to design and implement a microservices architecture.",
  budget: "₹88,056 - ₹1,76,112",
  duration: "4-5 months",
  skills: ["Docker", "Kubernetes", "Node.js"],
  clientName: "MicroService Co.",
  clientRating: 4.7,
  image: "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid"
},
{
  id: 9,
  title: "Web Developer for Portfolio Website",
  description: "Need a web developer to create a responsive portfolio website for showcasing projects.",
  budget: "₹22,014 - ₹44,028",
  duration: "2-4 weeks",
  skills: ["HTML", "CSS", "JavaScript"],
  clientName: "CreativePortfolios",
  clientRating: 4.6,
  image: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg"
},
{
  id: 10,
  title: "Django Developer for Web Application",
  description: "Looking for a Django developer to build a scalable web application.",
  budget: "₹66,042 - ₹1,32,084",
  duration: "3-4 months",
  skills: ["Django", "Python", "PostgreSQL"],
  clientName: "DjangoPros",
  clientRating: 4.8,
  image: "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid"
},

    {
      id: 6,
      title: "Mobile App Developer for Fitness App",
      description: "Looking for a mobile app developer to create a fitness tracking app.",
      budget: "₹88,056 - ₹1,76,112",
      duration: "3-6 months",
      skills: ["Mobile App Development", "iOS", "Android"],
      clientName: "FitTrack",
      clientRating: 4.9,
      image: "https://img.freepik.com/premium-photo/detailed-screen-mockup-smartphone-held-by-developer-with-coding-screen-background_73899-56607.jpg?semt=ais_hybrid"
    }
  ];

  const popularGigs = [
    {
      id: 101,
      title: "Professional Video Editor for Gaming Content",
      description: "Seeking a video editor experienced in editing gaming footage for our Twitch channel.",
      budget: "₹22,014 - ₹44,028",
      duration: "Ongoing",
      skills: ["Video Editing", "Gaming", "Twitch"],
      clientName: "GamersUnite",
      clientRating: 4.7,
      image: "https://img.freepik.com/free-photo/videographer-uses-software-create-visual-effects-video-projects-while-relaxing-with-music_482257-91925.jpg?semt=ais_hybrid"
    },
    {
      id: 102,
      title: "Social Media Manager for Fashion Brand",
      description: "We need a social media expert to manage and grow our brand's presence online.",
      budget: "₹16,510 - ₹33,020",
      duration: "Ongoing",
      skills: ["Social Media Management", "Content Creation", "Marketing"],
      clientName: "StyleHive",
      clientRating: 4.8,
      image: "https://img.freepik.com/free-vector/social-dashboard-concept-illustration_114360-1568.jpg?semt=ais_hybrid"
    },
    {
      id: 103,
      title: "UX/UI Designer for Mobile App Redesign",
      description: "Looking for a UX/UI designer to enhance our mobile app's user experience.",
      budget: "₹55,036 - ₹1,10,072",
      duration: "1-2 months",
      skills: ["UX/UI Design", "Wireframing", "Prototyping"],
      clientName: "AppRevamp",
      clientRating: 4.9,
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid"
    },
    {
      id: 104,
      title: "Data Analyst for Business Insights",
      description: "We require a data analyst to help us make informed business decisions.",
      budget: "₹66,042 - ₹1,32,084",
      duration: "3-6 months",
      skills: ["Data Analysis", "Python", "SQL"],
      clientName: "DataGenius",
      clientRating: 4.7,
      image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg?semt=ais_hybrid"
    },
    {
      id: 105,
      title: "Illustrator for Children's Book",
      description: "Seeking an illustrator to bring our children's book characters to life.",
      budget: "₹33,020 - ₹66,042",
      duration: "2-3 months",
      skills: ["Illustration", "Character Design", "Digital Art"],
      clientName: "KidsLit Publishing",
      clientRating: 4.8,
      image: "https://img.freepik.com/free-vector/children-racing-open-book_1308-171981.jpg?semt=ais_hybrid"
    },
    {
      id: 106,
      title: "Voice Actor for Animated Series",
      description: "Looking for a talented voice actor to join our animated series project.",
      budget: "₹22,014 - ₹44,028",
      duration: "Project-based",
      skills: ["Voice Acting", "Animation", "Script Reading"],
      clientName: "Animagic Studios",
      clientRating: 4.9,
      image: "https://img.freepik.com/free-photo/pretty-woman-singing-recording-trendy-songs-studio_7502-7235.jpg?semt=ais_hybrid"
    }
  ];

  const categories = [
    "Video Editing",
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "SEO",
    "Mobile App Development",
    "UX/UI Design",
    "Data Analysis",
    "Illustration",
    "Voice Acting"
  ];

  const niches = [
    "Student Projects",
    "Startups",
    "E-commerce",
    "Social Media",
    "Mobile Apps",
    "AI & Machine Learning",
    "Blockchain"
  ];
    const [searchTerm, setSearchTerm] = useState("");
    
    // const handleSearch = (e) => {
    //   setSearchTerm(e.target.value);
    // };

  const FilterSection = () => (
    <div className="filter-section">
      <h3>Filter Gigs</h3>
      
      <div className="filter-group">
        <h4>Delivery Day</h4>
        <label>
          <input 
            type="checkbox" 
            checked={filters.deliveryDay.includes('1')}
            onChange={() => toggleFilter('deliveryDay', '1')}
          />
          Get It by Tomorrow
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={filters.deliveryDay.includes('2')}
            onChange={() => toggleFilter('deliveryDay', '2')}
          />
          Get It in 2 Days
        </label>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <select 
          value={filters.category} 
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <h4>Customer Review</h4>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(star => (
            <FaStar 
              key={star}
              className={star <= filters.minRating ? 'active' : ''}
              onClick={() => setFilters({...filters, minRating: star})}
            />
          ))}
          <span>& Up</span>
        </div>
      </div>

      <div className="filter-group">
        <h4>Niches</h4>
        {niches.map(niche => (
          <label key={niche}>
            <input 
              type="checkbox" 
              checked={filters.niches.includes(niche)}
              onChange={() => toggleFilter('niches', niche)}
            />
            {niche}
          </label>
        ))}
 
      </div>
    </div>
  );

  const toggleFilter = (filterType, value) => {
    setFilters(prevFilters => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  const filteredGigs = [...featuredGigs, ...popularGigs].filter(gig => {
    const matchesSearch = gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          gig.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          gig.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
  
    return matchesSearch &&
      (filters.deliveryDay.length === 0 || filters.deliveryDay.includes(gig.duration.split(' ')[0])) &&
      (filters.category === '' || gig.skills.includes(filters.category)) &&
      gig.clientRating >= filters.minRating &&
      (filters.niches.length === 0 || filters.niches.some(niche => gig.skills.includes(niche)));
  });


  const GigCard = ({ gig, featured }) => (
    <div className="gig-card" onClick={() => setSelectedGig(gig)}>
      <div className="gig-image" style={{backgroundImage: `url(${gig.image})`}}>
        <button className="favorite-btn"><FaHeart /></button>
      </div>
      <div className="gig-content">
        <h3>{gig.title}</h3>
        <p>{gig.description}</p>
        <div className="gig-details">
          <span className="budget">{gig.budget}</span>
          <span className="duration">{gig.duration}</span>
        </div>
        <div className="skills">
          {gig.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="client-info">
          <span className="client-name">{gig.clientName}</span>
          <span className="client-rating">
            <FaStar /> {gig.clientRating.toFixed(1)}
          </span>
        </div>
      </div>
      {featured && <span className="featured-badge">Featured</span>}
    </div>
  );

  const GigModal = ({ gig, onClose }) => (
    <div className="gig-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <h2>{gig.title}</h2>
        <img src={gig.image} alt={gig.title} className="gig-full-image" />
        <p>{gig.description}</p>
        <div className="gig-details">
          <h3>Budget</h3>
          <p>{gig.budget}</p>
          <h3>Duration</h3>
          <p>{gig.duration}</p>
          <h3>Required Skills</h3>
          <div className="skills">
            {gig.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
          <h3>About the Client</h3>
          <p>{gig.clientName}</p>
          <p>Rating: <FaStar /> {gig.clientRating.toFixed(1)}</p>
        </div>
        <button 
          className="apply-btn" 
          onClick={() => {
            alert('Applied for this gig!');
          }}
        >
          Apply for this Gig
        </button>
      </div>
    </div>
  );

  return (
      <div className="find-gigs">
      <div className="gigs-container">
        <FilterSection />
        <div className="gigs-content">
          <section className="featured-gigs">
            <h2>Featured Gigs</h2>
            <div className="gig-grid">
              {filteredGigs.filter(gig => featuredGigs.some(fg => fg.id === gig.id)).map(gig => (
                <GigCard key={gig.id} gig={gig} featured={true} />
              ))}
            </div>
          </section>

          <section className="popular-gigs">
            <h2>Most Popular Gigs</h2>
            <div className="gig-grid">
              {filteredGigs.filter(gig => popularGigs.some(pg => pg.id === gig.id)).map(gig => (
                <GigCard key={gig.id} gig={gig} featured={false} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {selectedGig && (
        <GigModal gig={selectedGig} onClose={() => setSelectedGig(null)} />
      )}
    </div>
  );
};

export default FindGigs;
