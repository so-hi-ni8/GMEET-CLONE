const { useState, useEffect, useRef } = require("react")

const usePeer = () =>{
    const [peer, setPeer] = useState(null)
    const [myId, setMyId] = useState('')
    const isPeerSet = useRef(false)
    
    useEffect(() =>{
        if(isPeerSet.current) return;
        isPeerSet.current = true; //will run my peer file exactly once instead of twice.
        (async function initPeer(){
            const myPeer = new (await import('peerjs')).default()
            setPeer(myPeer)

            myPeer.on('open', (id) =>{
                console.log(`your Peer id is ${id}`)
                setMyId(id)
            })
        })()
    }, [])

    return {
        peer,
        myId
    }
}

export default usePeer;