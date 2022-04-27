import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 3,
  duration: '30s',
};

// export default function() {
//   http.get('http://localhost:3000/reviews?count=5&sort=newest&page=1&product_id=65660');
//   sleep(1);
// }

// export default function() {
//   http.put('http://localhost:3000/reviews/378783/helpful');
//   sleep(1);
// }

// export default function() {
//   http.put('http://localhost:3000/reviews/378783/report');
//   sleep(1);
// }

const url = `http://localhost:3000/reviews?product_id=1&rating=5&summary='Ut dolore odio beatae ut laborum.'&body='Reiciendis consequatur doloribus rem maiores maxime cum. Velit eum ut explicabo quas consequatur sed quo. Magni pariatur inventore consequatur quia saepe reprehenderit tempora voluptas. Et natus maiores facilis illo voluptatem voluptatibus nihil. Beatae non dolor sint qui. Deserunt blanditiis corporis delectus sit possimus.'&recommend=true&name='Cassandra'&email='cassandra@gmail.com'`

export default function() {
  http.post(url);
  sleep(1);
}