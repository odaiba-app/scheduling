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

export function fetchUserSkills() {
  const url = `${BASE_URL}/user_skills`;
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise };
}

export function createMultipleAvailabilities(array) {
  const url = `${BASE_URL}/user_availabilities/multiple`;
  const body = { "user_availability": { "time_block_ids": array } }

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  })

  // return { promise };
}

export function createRecurringAvailabilities(array) {
  const url = `${BASE_URL}/user_availabilities/multiple`;
  const body = { "user_availability": {"time_block_ids": array, "recurring": true } }

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  })

  // return { promise };
}

export function deleteAvailability(availId) {
  const url = `${BASE_URL}/user_availabilities/${availId}`;

  const promise = fetch(url, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
}

export function deleteAvailabilityFromTimeBlock(id) {
  const url = `${BASE_URL}/time_blocks/${id}/remove_user_availability`;

  const promise = fetch(url, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
}

export function updateUserSkill(id) {
  const url = `${BASE_URL}/user_skills/${id}`;

  const promise = fetch(url, {
    method: 'PATCH',
    credentials: 'same-origin'
  }).then(r => r.json());

  return { promise };
}

export function inviteUserToCollab(user_id, blockId) {
  const url = `${BASE_URL}/time_blocks/${blockId}/invite_to_collab`;
  const body = { "user_id": user_id }

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
