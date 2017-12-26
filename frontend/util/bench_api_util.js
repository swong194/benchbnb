const GET = 'GET';

export const fetchBenches = () => {
  return $.ajax({
    method: GET,
    url: '/api/benches'
  });
};
