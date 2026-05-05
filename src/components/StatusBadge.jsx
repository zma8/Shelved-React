const STATUS_COLORS = {
  'Maybe today?': '#F4A261',
  'Loading...': '#2A9D8F',
  'Resting': '#8ECAE6',
  'Done enough': '#95D5B2',
  'Not for me': '#E9C46A',
}

const StatusBadge = ({ status }) => {
  return (
    <span style={{backgroundColor:STATUS_COLORS[status]}}>
        {status}
    </span>
    )
}

export default StatusBadge