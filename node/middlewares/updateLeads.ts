export async function updateLeads(ctx: Context, next: () => Promise<any>) {
    const {
    originalUrl,
    state: { code }, 
      clients: { 
          
        updateLeads,
        orders
      } 
    } = ctx 
    const codeOriginal = originalUrl.split("/")
  
    ctx.set('Cache-Control','no-cache, no-store'); 
    ctx.set('X-VTEX-Use-Https','true') 
    ctx.set('Proxy-Authorization','ctx.authToken') 
    ctx.set('VtexIdclientAutCookie', 'ctx.authToken')
    ctx.set('AUTH_TOKEN', 'IBVCMKGEGRNPHBLRYVMJCLKVBHNIQINRDZKNAGFGZSYFAKITMELHGXRXQAAFWXNXDVLIRYQSQGJKMFUQZTVMWGLGHNWZFAJBEABEZACONTRZOHKKGKGDCABXKFADBQNP')
    console.log('APRESENTANDO VALORES DO CTX:')
    console.log(code)
    console.log(originalUrl)
    console.log(ctx)
    console.log('VARIAVEL FOI SPLITADA: ')
    console.log(codeOriginal[2])
    const resOrders = await orders.getOrders(codeOriginal[2]).catch((reason)=>{ 
        return reason?.response?.data }) 
        console.log('RESPONSE DO RESORDERS')
      console.log(resOrders)
      console.log('RESPONDE DO DOCUMENTO: ')
      console.log(resOrders.clientProfileData.document)
    const resLeads = await updateLeads.putLeads(resOrders.clientProfileData.document).catch((reason)=>{ 
      return reason?.response?.data }) 
  
    ctx.body = resLeads
    console.log(resLeads)
  
    await next()
  }