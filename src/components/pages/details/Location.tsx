// components/Locations.tsx
const Locations: React.FC = () => {
       return (
              <div>
                     <h3 className="text-lg my-2 font-semibold">Locations</h3>

                     <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                            <div className="space-y-3 text-subtitle">
                                   <div>
                                          <p className=" font-medium">Local</p>
                                          <p>Cras porta sapien placerat. Cras ex dolor consectetur lobortis, placerat.</p>
                                   </div>
                                   <div>
                                          <p className=" font-medium">HQ</p>
                                          <p>Quisque amet, maximus cursus convallis. ac Quisque Nunc odio massa ipsum volutpat.</p>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Locations;
