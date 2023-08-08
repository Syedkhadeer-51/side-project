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
  
  interface PropertyCardProps {
    properties: Property[];
    onClick: (property: Property) => void;
  }

export function PropertyCard({ properties, onClick }: PropertyCardProps) {
    return(
        <div className="my-2">
            <div className="grid grid-cols-12 gap-5 overflow-auto">
            {properties.map(property =>(
              
                <div key={property.id} className="col-span-3 card bg-neutral-100 p-2 rounded-md drop-shadow-md hover:bg-neutral-200" onClick={() => onClick(property)}>
                   <img className="rounded-lg m-auto w-100 my-2 p-1 object-cover" src={property.imageUrl} alt="property-image" />
                   <div className="m-2 text-left">
                   <h3 className="font-semibold text-sm p-1">{property.title}</h3>
                   {/* <p className="property-location text-sm font-normal text-gray-400 p-1">quiet apt home by the park,New,A cozy 2-bedroom house with a spacious backyard</p> */}
                   <div className="property-price text-sm font-normal p-1 text-slate-900">Price : <span>{property.price}</span></div>
                   <div className="flex items-center">
                   <p className="w-8/12 property-history text-sm font-light text-gray-400 flex items-center">
                   <span className="material-symbols-outlined text-md font-light p-1">
                        villa
                       </span>
                       {property.propertyStatus}</p>
                   <div className="property-details w-4/12">
                       <div className="flex items-center text-red-800 text-md font-light">
                       <span className="material-symbols-outlined  p-1 ">
                       single_bed
                       </span>
                       {property.bedrooms}
                       </div>
                   </div>
                   </div>
                   </div>
                    </div>     
            ))
            }
            </div>
        </div>
    )
}

export function PropertyList({ properties, onClick }: PropertyCardProps){
    return(
        <div className="my-2">
            {properties.map(property =>(
                      <div className="card p-2 bg-neutral-100 rounded-md width-full hover:bg-neutral-200 my-3" key={property.id}  onClick={() => onClick(property)}>
                        <div className="flex w-full gap-2">
                            <div className="w-10/12 flex align-center">
                                <div className="p-2">
                                <img className="rounded-md w-100 object-cover h-20" src={property.imageUrl} alt="property-image" /> 
                                </div>
                                <div className="p-2">
                                <h3 className="font-semibold text-md p-1">{property.title}</h3>
                                <h6 className="location font-light text-sm p-1 text-gray-500 flex items-center">
                                <span className="material-symbols-outlined">
                                    home_pin
                                    </span>
                                {property.title}
                                </h6>
                                <div className="property-price text-sm font-light p-1 text-slate-900">Price : <span>{property.price}</span></div>
                            </div>
                            </div>
                            <div className="w-2/12 flex items-center justify-end">
                                <div className=" p-1">
                                <span className="material-symbols-outlined text-red-900 font-bold text-3xl">
                                    chevron_right
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
            ))
            }
             
        </div>
    )
}