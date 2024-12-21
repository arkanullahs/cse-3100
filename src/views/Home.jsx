import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Ziggy', age: '2', breed: 'Bengal' }
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" id="cats-container"></div>
        <div className="mt-2 row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    height: '250px',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-2">{cat.name}</h3>
                  <div className="cat-details">
                    <p>
                      <i className="fas fa-birthday-cake" style={{ color: '#ff7f50' }}></i> {cat.age} years
                    </p>
                    <p>
                      <i className="fas fa-paw" style={{ color: '#6a5acd' }}></i> {cat.breed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
