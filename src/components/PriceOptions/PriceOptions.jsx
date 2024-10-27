import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "One personal training session per month",
                "Access during non-peak hours",
                "Basic nutrition plan",
                "Access to cardio equipment",
                "Discount on first purchase of supplements"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "Weekly personal training sessions",
                "Access to group fitness classes",
                "Access during peak and non-peak hours",
                "Free parking",
                "Advanced nutrition plan",
                "Two guest passes per month",
                "Access to spa and relaxation zone",
                "Discount on in-house supplements and merchandise",
                "Quarterly progress reports"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79,
            "features": [
                "Unlimited access to all gym equipment",
                "Locker facility with private lock",
                "Daily personal training sessions",
                "Access to group and specialty classes",
                "24/7 gym access",
                "Access to sauna, steam rooms, and hot tubs",
                "Free parking and valet service",
                "Customized nutrition and meal plan",
                "Unlimited guest passes",
                "Complimentary gym apparel",
                "Monthly body composition analysis",
                "Access to exclusive member-only workshops",
                "Priority booking for events",
                "Discounts on personal training packages and events",
                "Dedicated recovery and massage area access"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;