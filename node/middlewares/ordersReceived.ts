export async function allStates( ctx: StatusChangeContext, next: () => Promise<any> ) { 
    console.log(ctx.body.orderId) 
    const resOrders = await ctx.clients.oms.order(ctx.body.orderId).catch((reason)=>{ 
        return reason?.response?.data }) 
        console.log("IMPRIME PROFILE AQUI: ")
        console.log(resOrders)
    await ctx.clients.updateLeads.putLeads(resOrders.clientProfileData.document).catch((reason)=>{ 
      return reason?.response?.data }) 
    await next() 
}