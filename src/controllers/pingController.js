function pingController(request,response){
  return response.json({message: 'Succeed'});
}

module.exports = {
 pingController
}