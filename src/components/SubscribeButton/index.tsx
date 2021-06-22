import { signIn, getSession } from "next-auth/client"
import { useRouter } from "next/router"
import { api } from "../../services/api"
import { getStripeJs } from "../../services/stripe-js"
import styles from "./styles.module.scss"

// interface SubscribeProps {
//     priceId: string
// }

export function SubscribeButton() {
    const router = useRouter()
   
    async function handleSubscribe() {
        const session = await getSession()

        console.log(session)
        if(!session) {
            signIn('github')
            return
        }

        if(!session?.activeSubscription) {
           
            try{
                const response = await api.post('/subscribe')
                const { sessionId } = response.data
    
                const stripe = await getStripeJs()
                await stripe.redirectToCheckout({ sessionId })
            
            } catch(err){
                alert(err.message)
            }
            return
        } else {
            router.push('/posts')
        }

    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={ handleSubscribe }
        >
            Subscribe now
        </button>
    )
}