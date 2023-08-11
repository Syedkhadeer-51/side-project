import  { useState }  from 'react';
import { PropertyCard, PropertyList } from "../components/propertyComponent";
import PropertyView from "../components/PropertyView"; 

type Property = {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  propertyType: string;
  bedrooms: number;
  propertyStatus: string;
  description: string;
};

function Properties() {
  const [viewType, setViewType] = useState('grid');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const propertyData = [
    {
      id: 1,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHM8sWLugCAlzXPkMkhdOO_FB2fe-WzZ1lk3BrSw-WI5AHNZ05cEwSvqw3kZnziZ6J9c&usqp=CAU",
      title: "98AB Alexander Court, London",
      price: "1,200 (OMR)",
      propertyType: "villa",
      bedrooms: 3,
      propertyStatus:"used",
      description: "A cozy 2-bedroom house with a spacious backyard"
    },
    {
      id: 2,
      imageUrl: "https://www.engelvoelkers.com/images/31a13d90-6384-4e1a-ac1d-14f64ec787e3/modern-villa-in-an-exclusive-development-in-mijas",
      title: "Beautiful Beachfront Villa",
      price: "2,500 (OMR)",
      propertyType: "villa",
      bedrooms: 4,
      propertyStatus: "new",
      description: "Luxurious beachfront villa with stunning ocean views"
    },
    {
      id: 3,
      imageUrl: "https://www.engelvoelkers.com/images/31a13d90-6384-4e1a-ac1d-14f64ec787e3/modern-villa-in-an-exclusive-development-in-mijas",
      title: "Cozy Countryside Cottage",
      price: "800 (OMR)",
      propertyType: "cottage",
      bedrooms: 2,
      propertyStatus: "used",
      description: "Charming cottage nestled in a peaceful countryside"
    },
    {
      id: 4,
      imageUrl: "https://www.engelvoelkers.com/images/8e1d5576-e715-46a1-8927-e53cf2c37281/modern-villa-in-an-exclusive-development-in-mijas?w=576&h=432",
      title: "Urban Loft Apartment",
      price: "1,000 (OMR)",
      propertyType: "apartment",
      bedrooms: 1,
      propertyStatus: "new",
      description: "Modern loft apartment in a bustling city"
    },
    {
      id: 5,
      imageUrl: "https://img.freepik.com/premium-photo/modern-villa-illustration-ai-generativexa_118124-25460.jpg",
      title: "Spacious Family Home",
      price: "1,800 (OMR)",
      propertyType: "house",
      bedrooms: 5,
      propertyStatus: "used",
      description: "Large family home with plenty of living space"
    }
  ];

  const handlePropertyClick = (property:Property) => {
    setSelectedProperty(property);
    setViewType('property');
  };

  const handleBackToGrid = () => {
    setSelectedProperty(null);
    setViewType('grid');
  };

  return (
    <>
      <h2 className="font-bold text-3xl">Properties</h2>
      <h5 className="font-medium text-gray-500">All the listed properties</h5>
      <div>
      {!selectedProperty && (
        <button onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Switch to {viewType === 'grid' ? 'List' : 'Grid'} View
        </button>
      )}
      </div>
      {selectedProperty ? (
        <PropertyView property={selectedProperty} onBack={handleBackToGrid} />
      ) : (
        viewType === 'grid' ? (
          <PropertyCard properties={propertyData} onClick={handlePropertyClick} />
        ) : (
          <PropertyList properties={propertyData} onClick={handlePropertyClick} />
        )
      )}
    </>
  );
}

export default Properties;
