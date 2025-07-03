const { useState } = React;

const DeviceControl = () => {
  const [lights, setLights] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [fan, setFan] = useState(false);

  const toggleLights = () => {
    setLights(!lights);
    // Thêm logic gửi lệnh đến thiết bị (ví dụ: API call)
    console.log(`Lights toggled to: ${!lights}`);
  };

  const adjustTemperature = (e) => {
    const newTemp = parseInt(e.target.value);
    setTemperature(newTemp);
    // Thêm logic gửi lệnh đến thiết bị
    console.log(`Temperature adjusted to: ${newTemp}°C`);
  };

  const toggleFan = () => {
    setFan(!fan);
    // Thêm logic gửi lệnh đến thiết bị
    console.log(`Fan toggled to: ${!fan}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Smart Home Control</h1>

        {/* Lights Control */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Lights</h2>
          <button
            onClick={toggleLights}
            className={`w-full py-2 rounded ${lights ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {lights ? 'Turn Off' : 'Turn On'}
          </button>
          <p className="mt-2 text-gray-600">Status: {lights ? 'On' : 'Off'}</p>
        </div>

        {/* Temperature Control */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Temperature</h2>
          <input
            type="range"
            min="18"
            max="30"
            value={temperature}
            onChange={adjustTemperature}
            className="w-full"
          />
          <p className="mt-2 text-gray-600">Temperature: {temperature}°C</p>
        </div>

        {/* Fan Control */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Fan</h2>
          <button
            onClick={toggleFan}
            className={`w-full py-2 rounded ${fan ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {fan ? 'Turn Off' : 'Turn On'}
          </button>
          <p className="mt-2 text-gray-600">Status: {fan ? 'On' : 'Off'}</p>
        </div>
      </div>
    </div>
  );
};

// Xuất component để sử dụng trong file HTML
export default DeviceControl;