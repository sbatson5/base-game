export default function() {
  this.namespace = '/api/v1';

  this.get('/users/:id');
  this.get('/resource-lists/:id');
  this.get('/tool-lists');
  this.get('/followers');
  this.delete('/followers/:id');
  this.get('/missions');
  this.patch('/missions/:id');
}
