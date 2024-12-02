export default function TourCard(){
    return(
        <div className="border border-gray-500 rounded-lg grid w-auto p-2">
            <div className="flex justify-between">
                <h1>Title</h1>
                <div>{"<3"}</div>
            </div>
            <div className="px-5 py-8 border border-black">Image</div>
            <p>Description</p>
            <p>Price</p>
            <p>Rating</p>
        </div>
    )
}