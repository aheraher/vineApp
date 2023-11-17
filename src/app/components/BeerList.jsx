import React from 'react';
import Image from 'next/image';
const listItemStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  marginBottom: '10px',
  display: 'flex',
};

const imageStyle = {
  marginRight: '20px',
};

const loadingContainerStyle = {
  textAlign: 'center',
  fontSize: '18px',
  margin: '20px 0',
};

const spinnerStyle = {
  border: '4px solid rgba(255, 255, 255, 0.3)',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  animation: 'spin 1s linear infinite',
  // marginRight: '10px',
  margin: 'auto',
  color:'royalblue'
};

const BeerList = ({ beers }) => {
  return (
    <div>
      {beers.length === 0 ? (
        <div style={loadingContainerStyle}>
          <div style={spinnerStyle}></div>
          Loading...
        </div>
      ) : (
        <>
          <h2>Search Results</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {beers.map((beer) => (
              <li key={beer.id} style={listItemStyle}>
                <div style={imageStyle}>
                  {/* <img
                    src={beer.image_url}
                    
                    alt={beer.name}
                    style={{ maxWidth: '100px', borderRadius: '5px' }}

                  /> */}
                  <Image 
                  src={beer.image_url}
                  alt={beer.name}
                width={"100"}
                height={"160"}
                borderRadius={"5px"}
                  />

                </div>
                <div>
                  <strong>{beer.name}</strong> - {beer.tagline}
                  <p>
                    <span style={{ fontWeight: 'bold' }}>ABV:</span> {beer.abv}% |{' '}
                    <span style={{ fontWeight: 'bold' }}>IBU:</span> {beer.ibu}
                  </p>
                  <p>{beer.description}</p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>First Brewed:</span> {beer.first_brewed}
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Food Pairing:</span>{' '}
                    <ul style={{ paddingInlineStart: '20px' }}>
                      {beer.food_pairing.map((food, index) => (
                        <li key={index}>{food}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BeerList;
