function Faq() {
    return ( 
        <>
        <div className="flex items-center justify-center w-full p-8">
            {/* bg-[#F9F9F9] */}
            <div className="md:w-[35%] flex flex-col gap-2">
                <div className="flex items-center justify-center flex-col">
                    <h2 className="text-3xl font-bold">Have more Questions?</h2>
                    <p className="text-sm hidden">see our answers to our most frequently asked Questions.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="p-2 flex flex-col gap-2 rounded-md">
                        <div className="flex items-center justify-between">
                            <p>What Methods of Payments are Supported?</p>
                            <span className="text-3xl font-bold">+</span>
                        </div>
                        <div>
                            <p className="text-sm hidden">At JustHome Real Estate, we support bank transfers, 
                                major credit and debit cards, 
                                online payment platforms like PayPal, checks, 
                                and offer financing options through trusted financial institutions to ensure flexible 
                                and convenient payment methods.</p>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col gap-2 rounded-md">
                        <div className="flex items-center justify-between">
                            <p>Can I cancel at anytime?</p>
                            <span className="text-3xl font-bold">+</span>
                        </div>
                        <div>
                            <p className="text-sm hidden">At JustHome Real Estate, you can cancel your contract at any time. 
                                We aim to provide flexibility and ensure your satisfaction. 
                                However, please review any specific terms and conditions in your agreement that may apply.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col gap-2 rounded-md">
                        <div className="flex items-center justify-between">
                            <p>How do I get a receipt for my purchase?</p>
                            <span className="text-3xl font-bold">+</span>
                        </div>
                        <div>
                            <p className="text-sm hidden">
                            To get a receipt for your purchase with JustHome Real Estate, 
                            simply contact our customer support team or your dedicated agent. 
                            We will promptly provide you with a detailed receipt via email or physical mail, 
                            based on your preference.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col gap-2 rounded-md">
                        <div className="flex items-center justify-between">
                            <p>Which license do I need?</p>
                            <span className="text-3xl font-bold">+</span>
                        </div>
                        <div>
                            <p className="text-sm hidden">The type of license you need depends on your role. 
                                Homebuyers typically dont need a special license, 
                                real estate agents need a valid real estate license, 
                                and developers may need additional permits. 
                                Consult local authorities or legal experts.</p>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col gap-2 rounded-md">
                        <div className="flex items-center justify-between">
                            <p>How do I get access to a theme I purchased?</p>
                            <span className="text-3xl font-bold">+</span>
                        </div>
                        <div>
                            <p className="text-sm hidden">
                            To access your purchased theme from JustHome Real Estate, 
                            log in to your account on our website, navigate to your profile, 
                            find your order history, and download the theme directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Faq;