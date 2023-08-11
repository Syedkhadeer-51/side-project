type Property = {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  propertyType: string;
  bedrooms: number;
  propertyStatus:string;
  description: string;
};

type PropertyViewProps = {
  property: Property;
  onBack: () => void;
};

const PropertyView: React.FC<PropertyViewProps> = ({ property, onBack })  => {
  return (
    <>
    <button onClick={onBack} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Back
      </button>
    <div className="flex flex-col">
      <div className="PropertyCard card bg-neutral-100 p-3 m-2 w-full rounded-md">
        <img className="rounded-lg m-auto w-full h-80 my-2 p-1 object-cover" src={property.imageUrl} alt="property-image" />
        <div className="m-2 flex items-center">
          <div className="property-location w-8/12 text-left">
`          <h3 className="font-semibold text-xl p-1">{property.title}</h3>
           <h5 className="font-medium text-md p-1 text-gray-500">{property.title}</h5>`
          </div>
          <div className="property-pricing w-4/12 text-right">
            <h6 className="text-md font-medium p-1 text-slate-900">Price Range</h6>
            <h2 className="text-lg font-semibold p-1 text-red-800">{property.price}</h2>
          </div>
        </div>
        <div className="detail-cards my-3 mx-2 flex gap-5">
            <div className="w-2/12 rounded-md bg-red-600 text-red-800 bg-opacity-60 p-3 text-md font-medium flex items-center justify-around">
              <span className="material-symbols-outlined">
              king_bed
              </span>
              {property.bedrooms} Bedrooms
            </div>
            <div className="w-2/12 rounded-md bg-red-600 text-red-800 bg-opacity-60 p-3 text-md font-medium flex items-center justify-around">
              <span className="material-symbols-outlined">
              bathtub
              </span>
              {property.bedrooms} Bathrooms
            </div>
            <div className="w-2/12 rounded-md bg-red-600 text-red-800 bg-opacity-60 p-3 text-md font-medium flex items-center justify-around">
              <span className="material-symbols-outlined">
              garage_home
              </span>
              1 Garages
            </div>
          </div>
          <div className="about property">
           <h5 className="font-medium text-md p-1 text-slate-900">About property</h5>
           <p className="font-regular text-sm p-1 text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum</p>
          </div>
      </div>
        <div className="property-views card m-2 p-3 rounded-md bg-neutral-100 w-full">
           <h5 className="font-medium text-md p-1 text-slate-900">Property Views</h5>
            <div className="flex gap-2">
              <div className="w-3/12 rounded-md p-2">
              <img className="rounded-lg w-full h-50 p-1 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="property-image" />
              </div>
              <div className="w-3/12 rounded-md p-2">
              <img className="rounded-lg w-full h-50 p-1 object-cover" src="https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="property-image" />
              </div>
              <div className="w-3/12 rounded-md p-2">
              <img className="rounded-lg w-full h-50 p-1 object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="property-image" />
              </div>
              <div className="w-3/12 rounded-md p-2">
              <img className="rounded-lg w-full h-50 p-1 object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="property-image" />
              </div>
            </div>
          </div>
         <div className="property-map card m-2 p-3 rounded-md bg-neutral-100 w-full">
           <h5 className="font-medium text-md p-1 text-slate-900">Property Location</h5>
           <h6 className="location font-light text-md p-1 text-gray-500 flex items-center">
           <span className="material-symbols-outlined mr-3">
            home_pin
            </span>
            {property.title}
           </h6>
          </div>
    </div>
    </>
  )
}

export default PropertyView