import orderImg from "@/assets/images/account/dashboard/order.png"
import securityImg from "@/assets/images/account/dashboard/security.png"
import primeImg from "@/assets/images/account/dashboard/fshub_prime.png"
import addressImg from "@/assets/images/account/dashboard/fshub_address_book.png"
import paymentImg from "@/assets/images/account/dashboard/payment.png"

const basePath = "/account/dashboard"
export const FeatureItems = {
    basePath: basePath,
    items: [
        {
            src: orderImg,
            title: "Your Orders",
            description: "Track, return, cancel an order, download invoice or buy again",
            to: `${basePath}/orders`
        },
        {
            src: securityImg,
            title: "Login & security",
            description: "Edit login, name, and mobile number",
            to: `${basePath}/security`
        },
        {
            src: primeImg,
            title: "Prime",
            description: "Manage your membership, view benefits, and payment settings",
            to: `${basePath}/prime`
        },
        {
            src: addressImg,
            title: "Your Addresses",
            description: "Edit, remove or set default address",
            to: `${basePath}/addresses`
        },
        {
            src: paymentImg,
            title: "Your Payments",
            description: "View all transactions, manage payment methods and settings",
            to: `${basePath}/payments`
        },
    ]
}

