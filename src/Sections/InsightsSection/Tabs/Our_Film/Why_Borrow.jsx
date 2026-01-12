import React from 'react'

function Why_Borrow() {
    const Why_Borrow =
        [
            { id: 1, title: "Investments", desc: "Borrowing against your Bitcoin with Nomacal is a smart investment move because it lets you unlock liquidity without selling your assets. Instead of triggering capital gains taxes or missing out on potential future upside, you can access cash while your Bitcoin continues to work for you. Nomacal's fixed-rate loans with no margin calls mean you're protected from forced liquidations during market dips, giving you peace of mind and a long-term advantage. Whether you're looking to invest in new opportunities, cover expenses, or simply hold your Bitcoin through volatility, Nomacal offers a way to stay both invested and flexible." },
            { id: 2, title: "Large Purchases", desc: "Borrowing against your Bitcoin with Nomacal for a large purchase gives you the flexibility to access significant funds without disrupting your long-term financial goals. Instead of liquidating your holdings during a potentially unfavorable market, you can use your Bitcoin as collateral while keeping it intact. This approach is especially useful for major expenses-like funding a down payment, covering medical costs, or launching a project—where you need quick liquidity without compromise. With Nomacal's transparent terms and no margin calls, you can plan with confidence, knowing your Bitcoin remains secure while your purchase is taken care of." },
            { id: 3, title: "Day to Day Finances", desc: "Using your Bitcoin to borrow for day-to-day finances with Nomacal is a practical way to handle short-term needs without giving up your long-term investment. Whether it's covering bills, managing cash flow between paychecks, or handling an unexpected expense, Nomacal lets you tap into your Bitcoin's value without selling it. With no margin calls and fixed interest rates, you won't have to worry about sudden repayment demands due to market swings. It's a simple, stress-free way to access the cash you need-while your Bitcoin stays put and continues to work for your future." },
            { id: 4, title: "Debt Consolidation", desc: "Using your Bitcoin to borrow for debt consolidation through Nomacal can be a smart way to simplify your finances and reduce stress. Instead of juggling multiple high-interest debts like credit cards or personal loans, you can leverage your Bitcoin to secure a single, lower-cost loan. Nomacal's fixed rates and no margin calls provide predictability, making it easier to manage monthly payments without surprise spikes or forced sell-offs. By consolidating debt with a Bitcoin-backed loan, you retain ownership of your Bitcoin while streamlining your obligations-helping you regain control and work toward financial freedom. Buy more bitcoin with your loan Borrowing against your Bitcoin to buy more Bitcoin with Nomacal allows you to leverage your existing holdings to increase your exposure to Bitcoin's potential growth. By using your Bitcoin as collateral, you can take advantage of market opportunities to buy more without needing to sell your assets. Nomacal's fixed rates and no margin calls provide a stable and predictable borrowing experience, ensuring you aren't forced to liquidate during market volatility. This strategy lets you leverage your current investment to potentially accelerate your growth, all while keeping your original Bitcoin intact and working for you" }
        ]
    return (
        <div className='max-w-[1400px] mx-auto px-3 2xl:px-0'>
        <div className='bg-white flex flex-col lg:flex-row w-full rounded-[30px] lg:rounded-[60px] p-5 lg:p-10 mt-10'>
            <div className='flex-1'>
                <div className='flex flex-col justify-between h-full gap-2'>
                    <h1 className='font-[InterTight] font-semibold text-[18px] lg:text-[54px]'>Why Borrow using your Bitcoin as collateral on Nomacal?</h1>
                    <div className='bg-black text-white w-full lg:w-[280px] flex items-center justify-center rounded-full py-2 lg:py-5'>
                        <button>Get Loan</button>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                {
                    Why_Borrow.map((item) => (
                        <div className='flex flex-col border-b-1 border-[#0000002E] border-opacity-18 py-5' key={item.id}>
                            <h1 className='font-[InterTight] font-semibold text-[24px]'>{item.title}</h1>
                            <p className='font-[InterTight] font-regular text-[16px] text-opacity-50 py-5'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Why_Borrow;