export const serverGetImg = () => {
  return fetch(
    "https://pixabay.com/api/?key=19878628-2a39041042f4a1a9d56d22ff5&q=yellow+flowers&image_type=photo"
  )
    .then((response) => response.json())
    .then((commits) => commits.hits)
    .catch(error => console.log(error))
};
