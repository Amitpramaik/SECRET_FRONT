import { useSecretStore } from "../../../store/SecretStore"

export default function SecretDeatails() {
    const selectedSecret = useSecretStore((store) => store.selectedSecret)
    return (
        <div style={{padding:12}}>{selectedSecret ?
            <>
                <div style={{display:"flex", flexDirection:"row", gap:8}}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <h3>{selectedSecret.title}</h3>
                <p>{selectedSecret.value}</p>
            </>
            : "No item selected"}
        </div>
    )
}

