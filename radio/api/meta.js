// api/meta.js
export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await fetch(`https://api.zeno.fm/mounts/metadata/subscribe/${id}`);
    const data = await response.json();
    // Ye server-side se data fetch karega, isliye block nahi hoga
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
