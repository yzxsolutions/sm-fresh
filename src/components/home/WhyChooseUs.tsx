'use client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Farm Fresh Quality",
      description: "Hand-picked produce delivered fresh from local farms to ensure the highest quality and taste. Every item is carefully selected for peak freshness.",
      color: "green"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lightning Fast Delivery",
      description: "Same-day delivery service available to bring fresh produce right to your doorstep. Order before 2 PM for same-day delivery in your area.",
      color: "orange"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Best Value Prices",
      description: "Competitive pricing with regular offers and discounts on premium fresh produce. We believe quality shouldn't break the bank.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Satisfaction Guarantee",
      description: "Not happy with your purchase? We offer a full money-back guarantee. Your satisfaction is our top priority, always.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Locally Sourced",
      description: "Supporting local farmers and communities by sourcing directly from regional farms. Fresh for you, good for the community.",
      color: "red"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging solutions that protect your produce while caring for our planet. Recyclable and biodegradable materials only.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-50 text-green-500 group-hover:bg-green-100",
      orange: "bg-orange-50 text-orange-500 group-hover:bg-orange-100",
      blue: "bg-blue-50 text-blue-500 group-hover:bg-blue-100",
      purple: "bg-purple-50 text-purple-500 group-hover:bg-purple-100",
      red: "bg-red-50 text-red-500 group-hover:bg-red-100",
      teal: "bg-teal-50 text-teal-500 group-hover:bg-teal-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SM Fresh Hyper?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to bringing you the freshest produce with exceptional service. 
            Here&apos;s what makes us different from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Fresh Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Local Farms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}