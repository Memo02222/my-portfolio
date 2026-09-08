/**
 * network-bg.js — Live Cybersecurity & SOC Operations Animated Canvas
 * Features:
 * 1. Network Topology (Servers, Endpoints, Routers, Sensors)
 * 2. Real-time Glowing Data Packets traveling along network connections
 * 3. Rotating SOC Threat Detection Radar Scanner
 * 4. Floating Cyber Telemetry Stream (IPs, Ports, Firewall, SIEM, Encryption)
 * 5. Interactive Mouse Scanner & Defense Grid Response
 */
(function () {
  "use strict";
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let dots = [];
  let packets = [];
  let telemetryItems = [];
  let radarAngle = 0;
  let mouse = { x: -1000, y: -1000, radius: 180 };

  const MAX_DIST = 140;

  // Cybersecurity tags to float in background
  const CYBER_STRINGS = [
    "192.168.1.100",
    "PORT: 443 [TLS 1.3]",
    "SIEM: ACTIVE",
    "STATUS: SECURE",
    "PACKET: TCP/SYN-ACK",
    "FIREWALL: ACCEPT",
    "SHA-256 [VERIFIED]",
    "SOC-L1 MONITORING",
    "AES-256-GCM",
    "IDS/IPS: RUNNING",
    "ETH0: 10 Gbps",
    "PCAP: ANALYZING",
    "DEFENSE: ENGAGED",
    "VLAN 10: TRAFFIC OK",
    "0x5F3759DF",
    "MITRE ATT&CK: 0 THREATS",
    "SYS_LOG: MONITORED",
    "Splunk / QRadar OK"
  ];

  function resize() {
    const parent = canvas.parentElement || document.body;
    width = canvas.width = parent.clientWidth || window.innerWidth;
    height = canvas.height = parent.clientHeight || window.innerHeight;
  }

  function getDotCount() {
    if (width < 600) return 30;
    if (width < 1100) return 50;
    return 70;
  }

  function createDots() {
    dots = [];
    const count = getDotCount();
    for (let i = 0; i < count; i++) {
      // Some special nodes are 'servers' or 'firewalls' with slightly larger radius
      const isHub = Math.random() < 0.18;
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: isHub ? Math.random() * 2 + 3.2 : Math.random() * 1.5 + 1.2,
        isHub: isHub,
        pulseVal: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.015
      });
    }
  }

  // Create real-time network packets traveling along lines
  function spawnPacket(source, target) {
    if (packets.length > 25) return;
    packets.push({
      source: source,
      target: target,
      progress: 0,
      speed: Math.random() * 0.015 + 0.008,
      size: Math.random() * 1.5 + 2
    });
  }

  // Create floating cyber telemetry text elements
  function initTelemetry() {
    telemetryItems = [];
    const count = Math.min(14, Math.floor(width / 120));
    for (let i = 0; i < count; i++) {
      telemetryItems.push({
        text: CYBER_STRINGS[Math.floor(Math.random() * CYBER_STRINGS.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(Math.random() * 0.35 + 0.15),
        alpha: Math.random() * 0.25 + 0.1,
        fontSize: Math.floor(Math.random() * 3 + 10)
      });
    }
  }

  function getColor() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? '0, 245, 255' : '0, 224, 211';
  }

  function getSecColor() {
    return '16, 185, 129'; // Emerald cyber green
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const cyanRgb = getColor();
    const greenRgb = getSecColor();

    // 1. Draw Rotating SOC Threat Radar (Subtle radar sweep around center-right)
    radarAngle += 0.008;
    const radarCenterX = width * 0.72;
    const radarCenterY = height * 0.48;
    const radarRadius = Math.min(width, height) * 0.55;

    // Radar concentric rings
    ctx.save();
    ctx.strokeStyle = `rgba(${cyanRgb}, 0.04)`;
    ctx.lineWidth = 1;
    for (let r = 1; r <= 3; r++) {
      ctx.beginPath();
      ctx.arc(radarCenterX, radarCenterY, (radarRadius / 3) * r, 0, Math.PI * 2);
      ctx.stroke();
    }
    // Radar sweep wedge
    const sweepGradient = ctx.createRadialGradient(
      radarCenterX, radarCenterY, 0,
      radarCenterX, radarCenterY, radarRadius
    );
    sweepGradient.addColorStop(0, `rgba(${cyanRgb}, 0.06)`);
    sweepGradient.addColorStop(1, `rgba(${cyanRgb}, 0.0)`);
    ctx.fillStyle = sweepGradient;
    ctx.beginPath();
    ctx.moveTo(radarCenterX, radarCenterY);
    ctx.arc(radarCenterX, radarCenterY, radarRadius, radarAngle, radarAngle + 0.35);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 2. Draw Floating Cyber Telemetry Text Stream
    ctx.save();
    ctx.font = '11px "Fira Code", monospace';
    for (let i = 0; i < telemetryItems.length; i++) {
      const item = telemetryItems[i];
      ctx.fillStyle = `rgba(${cyanRgb}, ${item.alpha})`;
      ctx.fillText(item.text, item.x, item.y);

      item.y += item.vy;
      if (item.y < -30) {
        item.y = height + 30;
        item.x = Math.random() * width;
        item.text = CYBER_STRINGS[Math.floor(Math.random() * CYBER_STRINGS.length)];
      }
    }
    ctx.restore();

    // 3. Draw Network Connection Lines & Spawn Packets
    const len = dots.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.32;
          ctx.strokeStyle = `rgba(${cyanRgb}, ${alpha})`;
          ctx.lineWidth = dots[i].isHub || dots[j].isHub ? 1 : 0.6;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();

          // Chance to spawn packet
          if (Math.random() < 0.002) {
            spawnPacket(dots[i], dots[j]);
          }
        }
      }
    }

    // 4. Draw Packets Moving Along Network Connections
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.progress += p.speed;

      if (p.progress >= 1) {
        packets.splice(i, 1);
        continue;
      }

      const px = p.source.x + (p.target.x - p.source.x) * p.progress;
      const py = p.source.y + (p.target.y - p.source.y) * p.progress;

      // Packet glow
      ctx.fillStyle = `rgba(${greenRgb}, 0.95)`;
      ctx.shadowColor = `rgba(${greenRgb}, 0.8)`;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }

    // 5. Connect nearby nodes to Mouse (Threat Analysis Scanner)
    if (mouse.x > 0 && mouse.y > 0) {
      ctx.save();
      // Mouse threat targeting ring
      ctx.strokeStyle = `rgba(${greenRgb}, 0.4)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      for (let i = 0; i < len; i++) {
        const mdx = dots[i].x - mouse.x;
        const mdy = dots[i].y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const mAlpha = (1 - mDist / mouse.radius) * 0.7;
          ctx.strokeStyle = `rgba(${cyanRgb}, ${mAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // 6. Draw Network Nodes (Endpoints & Hubs)
    for (let i = 0; i < len; i++) {
      const dot = dots[i];
      dot.pulseVal += dot.pulseSpeed;
      const pulseFactor = Math.sin(dot.pulseVal);

      if (dot.isHub) {
        // Hub / Server / Firewall node
        ctx.fillStyle = `rgba(${cyanRgb}, 0.18)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r * 2.2 + pulseFactor * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${greenRgb}, 0.85)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Standard endpoint node
        ctx.fillStyle = `rgba(${cyanRgb}, 0.55)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r + pulseFactor * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Movement
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;
    }

    requestAnimationFrame(draw);
  }

  // Setup & Event listeners
  resize();
  createDots();
  initTelemetry();
  draw();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      createDots();
      initTelemetry();
    }, 120);
  });

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    heroSection.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    }, { passive: true });

    heroSection.addEventListener('touchend', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });
  }
})();
