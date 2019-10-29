const getJobUrl = jobTitle => {
  const jobImages = [
    "communication",
    "data",
    "design",
    "developer",
    "interact"
  ];
  const titleImage =
    jobImages.find(i => jobTitle.includes(i)) ||
    `random${Math.ceil(Math.random() * 4)}`;
  return `./library/images/jobs/${titleImage}.png`;
};
