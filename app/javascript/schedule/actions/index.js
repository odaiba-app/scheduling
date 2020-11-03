const BASE_URL = '/api/v1';

export function fetchDay(day) {
  const url = `${BASE_URL}/day/${day}`;
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise };
}

export function fetchBlock(id) {
  const url = `${BASE_URL}/time_blocks/${id}`;
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise };
}

export function fetchUser() {
  const url = `${BASE_URL}/logged`;
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise };
}

export function fetchSkills() {
  const url = `${BASE_URL}/skills`;
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise };
}


export function createAvailability(id) {
  const url = `${BASE_URL}/user_availabilities`;
  const body = { "user_availability": { "time_block_id": id } }

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return { promise };
}

export function deleteAvailability(availId) {
  const url = `${BASE_URL}/user_availabilities/${availId}`;
  // const body = { "user_availability": { "time_block_id": blockId } }

  const promise = fetch(url, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
}
