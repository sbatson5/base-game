export default function() {
  this.namespace = '/api/v1';

  this.get('/users/:id');
  this.get('/resource-lists/:id');
}
