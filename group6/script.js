function updateTime() {
    const timeZones = [
      { id: "thailand", offset: 7 },
      { id: "indonesia", offset: 7 },
      { id: "singapore", offset: 8 },
      { id: "philippines", offset: 8 },
      { id: "vietnam", offset: 7 },
    ];
  
    const now = new Date();
  
    timeZones.forEach(zone => {
      const localTime = new Date(now.getTime() + zone.offset * 3600 * 1000);
      const timeString = localTime.toUTCString().split(" ")[4];
      document.getElementById(zone.id).querySelector('.time').textContent = timeString;
    });
  }
  
  // อัปเดตเวลาแบบเรียลไทม์
  setInterval(updateTime, 1000);
  updateTime();
  