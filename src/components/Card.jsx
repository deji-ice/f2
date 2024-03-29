/* eslint-disable react/prop-types */

const Card = ({ name, position, description, image, company }) => {


    return (
        <div className="w-fit border-2 border-slate-900 m-20 flex items-center flex-col justify-center p-5">
            <div>
                <p className="text-2xl ">{description}</p>
            </div>
            <div>
                <div>
                    <img src={image} />
                </div>
                <div className="flex flex-col">
                    <div>
                        {name}
                    </div>
                    <div> {position} @ {company} </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
