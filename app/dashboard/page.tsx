import { Card } from "../ui/dashboard/cards"
import RevenueChart  from "../ui/dashboard/revenue-chart"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import { lusitana } from "../ui/font"
import { fetchCardData } from "../lib/data"
import { Suspense } from "react"
import { RevenueChartSkeleton, CardSkeleton, LatestInvoicesSkeleton } from "../ui/skeletons"
import CardWrapper from "../ui/dashboard/cards"

export default async function Page() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2xl`}> 
                Dashboard
            </h1>

            <Suspense fallback={<RevenueChartSkeleton/>}>
                <CardWrapper/>
            </Suspense>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
            <Suspense fallback={<RevenueChartSkeleton/>}>
                <LatestInvoices/> 
             </Suspense>
            </div>
        </main>


    )
    


}