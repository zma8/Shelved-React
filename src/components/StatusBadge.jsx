const STATUS_COLORS = {
  'Maybe today?': '#bc61f4ff',
  'Loading...': '#2A9D8F',
  'Resting': '#8ECAE6',
  'Done enough': '#95D5B2',
  'Not for me': '#E9C46A',
}

const StatusBadge = ({ status }) => {
  return (
    <span  className="status-badge">
        {status}
    </span>
    )
}

export default StatusBadge