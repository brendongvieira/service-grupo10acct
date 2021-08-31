
export async function updateLeads(ctx: Context, next: () => Promise<any>) {
    const {
    originalUrl,
      clients: { 
        updateLeads,
        oms
      } 
    } = ctx 
    const codeOriginal = originalUrl.split("/")
  
    ctx.set('Cache-Control','no-cache, no-store'); 
    ctx.set('X-VTEX-Use-Https','true') 
    ctx.set('Proxy-Authorization','ctx.authToken') 
    ctx.set('VtexIdclientAutCookie', 'ctx.authToken')
    ctx.set('AUTH_TOKEN', 'IBVCMKGEGRNPHBLRYVMJCLKVBHNIQINRDZKNAGFGZSYFAKITMELHGXRXQAAFWXNXDVLIRYQSQGJKMFUQZTVMWGLGHNWZFAJBEABEZACONTRZOHKKGKGDCABXKFADBQNP')
    
    const resOrders = await oms.order(codeOriginal[2]).catch((reason)=>{ 
        return reason?.response?.data }) 
        console.log("IMPRIME PROFILE AQUI: ")
        console.log(resOrders)
    const resLeads = await updateLeads.putLeads(resOrders.clientProfileData.document).catch((reason)=>{ 
      return reason?.response?.data }) 
  
    ctx.body = resLeads
  
  
    await next()
    }
  

