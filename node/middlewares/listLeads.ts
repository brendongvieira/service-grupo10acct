export async function listLeads(ctx: Context, next: () => Promise<any>) {
  const { 
    clients: { 
      listLeads
    } 
  } = ctx 

  ctx.set('Cache-Control','no-cache, no-store'); 
  ctx.set('X-VTEX-Use-Https','true') 
  ctx.set('Proxy-Authorization','ctx.authToken') 

  const res = await listLeads.getLeads().catch((reason)=>{ 
    return reason?.response?.data }) 

  ctx.body = res 
  console.log(res)

  await next()
}

// export async function order(ctx: Context, next: () => Promise<any>) {
//   const {
//     state: { code },
//     clients: { status: statusClient },
//   } = ctx

//   console.info('Received code:', code)

//   const statusResponse = await statusClient.getStatus(code)

//   console.info('Status response:', statusResponse)

//   const {
//     headers,
//     data,
//     status: responseStatus,
//   } = await statusClient.getStatusWithHeaders(code)

//   console.info('Status headers', headers)
//   console.info('Status data:', data)

//   ctx.status = responseStatus
//   ctx.body = data
//   ctx.set('Cache-Control', headers['cache-control'])

//   await next()
// }
