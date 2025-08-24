import orderImg from "@/assets/images/account/dashboard/order.png"
import securityImg from "@/assets/images/account/dashboard/security.png"
import primeImg from "@/assets/images/account/dashboard/fshub_prime.png"
import addressImg from "@/assets/images/account/dashboard/fshub_address_book.png"
import paymentImg from "@/assets/images/account/dashboard/payment.png"
export class FeatureData {
    static items = [
        {
            src: orderImg,
            title: "Your Orders",
            description: "Track, return, cancel an order, download invoice or buy again"
        },
        {
            src: securityImg,
            title: "Login & security",
            description: "Edit login, name, and mobile number"
        },
        {
            src: primeImg,
            title: "Prime",
            description: "Manage your membership, view benefits, and payment settings"
        },
        {
            src: addressImg,
            title: "Your Addresses",
            description: "Edit, remove or set default address"
        },
        {
            src: paymentImg,
            title: "Your Payments",
            description: "View all transactions, manage payment methods and settings"
        },
    ];
}
