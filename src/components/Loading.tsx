export default function Loading(){
    return(
        <div style={{position:'fixed', height:'100dvh', zIndex:9999999, width:'100dvw', display:'grid', placeItems:'center', backgroundColor:'#b1acac6a',backdropFilter:'blur(0.5px)'}}>
            <span className='loader' >

            </span>
        </div>
    )
}