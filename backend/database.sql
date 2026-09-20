CREATE DATABASE IF NOT EXISTS tripgineer;

USE tripgineer;

CREATE TABLE IF NOT EXISTS search_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    url VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_search_item (name, category)
);

INSERT INTO search_items (name, category, url)
VALUES
(
    'Patenga Sea Beach',
    'Beach',
    'index.html?category=beach&place=Patenga Sea Beach'
),
(
  'Guliakhali Sea Beach',
  'Beach',
  'index.html?category=beach&place=Guliakhali Sea Beach'
),
(
  'Parki Sea Beach',
  'Beach',
  'index.html?category=beach&place=Parki Sea Beach'
),
(
  'Banshkhali Sea Beach',
  'Beach',
  'index.html?category=beach&place=Banshkhali Sea Beach'
),
(
  'Banshbaria Sea Beach',
  'Beach',
  'index.html?category=beach&place=Banshbaria Sea Beach'
),
(
  'Kumira Coastal Area',
  'Beach',
  'index.html?category=beach&place=Kumira Coastal Area'
),
(
  'Kattali Beach',
  'Beach',
  'index.html?category=beach&place=Kattali Beach'
),
(
  'Sagoria Beach',
  'Beach',
  'index.html?category=beach&place=Sagoria Beach'
),
(
  'Anandabazar Beach',
  'Beach',
  'index.html?category=beach&place=Anandabazar Beach'
),
(
  'Halishahar Beach',
  'Beach',
  'index.html?category=beach&place=Halishahar Beach'
),
(
  'Bayazid Bostami Shrine',
  'Religious',
  'index.html?category=religious&place=Bayazid Bostami Shrine'
),
(
  'Karnaphuli Mariners Park',
  'Park',
  'index.html?category=park&place=Karnaphuli Mariners Park'
),
(
  'Forest Academy Botanical Park',
  'Park',
  'index.html?category=park&place=Forest Academy Botanical Park'
),
(
  'Butterfly Park Bangladesh',
  'Park',
  'index.html?category=park&place=Butterfly Park Bangladesh'
),
(
  'Hazrat Shah Mohsen Aulia (R.) Mazar',
  'Religious',
  'index.html?category=religious&place=Hazrat Shah Mohsen Aulia (R.) Mazar'
),
(
  'Chandanpura Mosque',
  'Religious',
  'index.html?category=religious&place=Chandanpura Mosque'
),
(
  'Chandranath Temple',
  'Religious',
  'index.html?category=religious&place=Chandranath Temple'
),
(
  'Anderkilla Shahi Jame Mosque',
  'Religious',
  'index.html?category=religious&place=Anderkilla Shahi Jame Mosque'
),
(
  'Radisson Blu Hotel, Chattogram Bay View',
  'Hotel',
  'index.html?category=hotel&place=Radisson Blu Hotel, Chattogram Bay View'
),
(
  'Chandranath Hill',
  'Hill',
  'index.html?category=hill&place=Chandranath Hill'
),
(
  'Batali Hill',
  'Hill',
  'index.html?category=hill&place=Batali Hill'
),
(
  'CRB Hill',
  'Hill',
  'index.html?category=hill&place=CRB Hill'
),
(
  'Jilapi Pahar',
  'Hill',
  'index.html?category=hill&place=Jilapi Pahar'
),
(
  'Tiger Pass Hill',
  'Hill',
  'index.html?category=hill&place=Tiger Pass Hill'
),
(
  'Moti Jharna Hill',
  'Hill',
  'index.html?category=hill&place=Moti Jharna Hill'
),
(
  'Court Hill',
  'Hill',
  'index.html?category=hill&place=Court Hill'
),
(
  'DC Hill',
  'Hill',
  'index.html?category=hill&place=DC Hill'
),
(
  'Foy''s Lake Hill Area',
  'Hill',
  'index.html?category=hill&place=Foy''s Lake Hill Area'
),
(
  'Nangarkhana Hill',
  'Hill',
  'index.html?category=hill&place=Nangarkhana Hill'
),
(
  'Sandwip Island',
  'Island',
  'index.html?category=island&place=Sandwip Island'
),
(
  'Amanullah Char',
  'Island',
  'index.html?category=island&place=Amanullah Char'
),
(
  'Urir Char',
  'Island',
  'index.html?category=island&place=Urir Char'
),
(
  'Kalapania',
  'Island',
  'index.html?category=island&place=Kalapania'
),
(
  'Chattogram War Cemetery',
  'Historical',
  'index.html?category=historical&place=Chattogram War Cemetery'
),
(
  'Ethnological Museum',
  'Museum',
  'index.html?category=museum&place=Ethnological Museum'
),
(
  'Mini Bangladesh',
  'Park',
  'index.html?category=park&place=Mini Bangladesh'
),
(
  'Foy''s Lake',
  'Lake',
  'index.html?category=lake&place=Foy''s Lake'
),
(
  'Sitakunda Botanical Garden & Eco Park',
  'Nature',
  'index.html?category=nature&place=Sitakunda Botanical Garden & Eco Park'
),
(
  'Mahamaya Lake & Eco Park',
  'Nature',
  'index.html?category=nature&place=Mahamaya Lake & Eco Park'
),
(
  'Bhatiary Lake',
  'Lake',
  'index.html?category=lake&place=Bhatiary Lake'
),
(
  'DC Park',
  'Park',
  'index.html?category=park&place=DC Park'
),
(
  'Jamboree Park',
  'Park',
  'index.html?category=park&place=Jamboree Park'
),
(
  'Biplob Udyan',
  'Park',
  'index.html?category=park&place=Biplob Udyan'
),
(
  'The Peninsula Chittagong',
  'Hotel',
  'index.html?category=hotel&place=The Peninsula Chittagong'
),
(
  'Hotel Agrabad',
  'Hotel',
  'index.html?category=hotel&place=Hotel Agrabad'
),
(
  'Best Western SKS Chattogram',
  'Hotel',
  'index.html?category=hotel&place=Best Western SKS Chattogram'
),
(
  'Well Park Residence',
  'Hotel',
  'index.html?category=hotel&place=Well Park Residence'
),
(
  'Foy''s Lake Resort',
  'Hotel',
  'index.html?category=hotel&place=Foy''s Lake Resort'
),
(
  'Jatra Flagship Chattogram City Centre',
  'Hotel',
  'index.html?category=hotel&place=Jatra Flagship Chattogram City Centre'
),
(
  'Brisa Marina',
  'Hotel',
  'index.html?category=hotel&place=Brisa Marina'
),
(
  'Sea World Foy''s Lake Resort',
  'Hotel',
  'index.html?category=hotel&place=Sea World Foy''s Lake Resort'
),
(
  'Hotel Crown City',
  'Hotel',
  'index.html?category=hotel&place=Hotel Crown City'
),
(
  'Dhopachhari',
  'Nature',
  'index.html?category=nature&place=Dhopachhari'
),
(
  'Banshbaria',
  'Nature',
  'index.html?category=nature&place=Banshbaria'
);