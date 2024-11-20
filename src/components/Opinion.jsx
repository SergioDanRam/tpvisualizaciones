import React from "react";
import Stars from "./Stars";

function Opinion({name}) {
    return (
        <div className="max-w-52 bg-secondary-light md:grid lg:grid-rows-0 p-3 space-y-4 rounded-lg mx-auto">
            <div>
                <h3 className="font-semibold text-lg">Excelente curso</h3>
            </div>
            <div className="flex flex-col justify-between space-y-4">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates aut et at nulla nemo cum quasi quod excepturi
                        eos illum vitae tempore commodi, praesentium qui facere
                        reiciendis modi libero
                    </p>
                    <Stars />
                    <p className="text-2xl font-semibold tracking-wide">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Opinion;
