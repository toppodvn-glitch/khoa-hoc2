/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Smartphone, 
  TrendingDown, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Users, 
  Mic, 
  Shield, 
  ChevronDown, 
  Play, 
  Star,
  Menu,
  X,
  Search,
  FileText,
  Film,
  MessageSquare,
  Clock,
  Gift
} from 'lucide-react';

// --- Components ---

const FOMOPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [viewers, setViewers] = useState(38);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => setIsVisible(true), 15000);
    
    // Countdown timer
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Random viewers fluctuation
    const viewerInterval = setInterval(() => {
      setViewers(prev => Math.max(25, prev + Math.floor(Math.random() * 5) - 2));
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(viewerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop to close when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 z-[65] bg-black/5 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-0"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-4 md:right-8 z-[70] max-w-[280px] md:max-w-[320px] w-full"
          >
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden relative">
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10 bg-white/80 rounded-full md:bg-transparent"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>

              <div className="bg-primary p-3 md:p-4 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10">
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase mb-1 md:mb-2">ƯU ĐÃI GIỚI HẠN</span>
                  <h4 className="text-lg md:text-xl font-black leading-tight">GIẢM NGAY 50% <br/> + QUÀ TẶNG KHỦNG</h4>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between bg-slate-50 p-2 md:p-3 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={16} />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Kết thúc sau:</span>
                  </div>
                  <span className="text-base md:text-lg font-black text-primary tabular-nums">{formatTime(timeLeft)}</span>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1.5 rounded-lg shrink-0">
                      <Gift className="text-emerald-600" size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-slate-800 leading-tight">Bộ "Lọc Vàng" 11 Câu Hỏi</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500">Nhận diện khách sẵn sàng mua</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1.5 rounded-lg shrink-0">
                      <Users className="text-blue-600" size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-slate-800 leading-tight">Hệ Thống "Ghi Nhớ Vạn Năng"</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500">Kiểm soát 1000 khách hàng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1.5 rounded-lg shrink-0">
                      <TrendingDown className="text-amber-600" size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-slate-800 leading-tight">File Tính "Tự Do Tài Chính"</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500">Lập lộ trình trả nợ chi tiết</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1.5 rounded-lg shrink-0">
                      <Award className="text-purple-600" size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-slate-800 leading-tight">Bí Mật "Quán Quân"</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500">Thuộc thông số dự án gấp 10x</p>
                    </div>
                  </div>
                </div>

                <div className="pt-1 md:pt-2">
                  <a 
                    href="#pricing" 
                    onClick={() => setIsVisible(false)}
                    className="block w-full bg-slate-900 hover:bg-black text-white text-center py-2.5 md:py-3 rounded-xl font-black text-xs md:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                  >
                    NHẬN ƯU ĐÃI NGAY
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-medium text-slate-400">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span>Đang có {viewers} người xem ưu đãi này</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const RegistrationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', time: '' });

  const names = ['Anh Tuấn', 'Chị Linh', 'Anh Hoàng', 'Chị Thảo', 'Anh Minh', 'Chị Lan', 'Anh Dũng', 'Chị Mai', 'Anh Hùng', 'Chị Phượng'];
  const locations = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Bình Dương', 'Đồng Nai', 'Quảng Ninh', 'Vũng Tàu', 'Nha Trang'];

  useEffect(() => {
    const showRandomPopup = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomTime = Math.floor(Math.random() * 15) + 1;
      
      setData({ 
        name: randomName, 
        location: randomLocation, 
        time: `${randomTime} phút trước` 
      });
      
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimer = setTimeout(showRandomPopup, 8000);

    // Repeat every 20-35 seconds
    const interval = setInterval(() => {
      showRandomPopup();
    }, Math.random() * 15000 + 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-24 left-4 md:left-8 z-[70] w-[calc(100%-2rem)] max-w-[280px] md:max-w-[320px]"
        >
          <div className="bg-[#1a1a1a] text-white p-4 rounded-2xl shadow-2xl border border-white/5 flex items-center gap-4 relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-amber-400 flex items-center justify-center">
                <CheckCircle2 className="text-amber-400" size={14} />
              </div>
            </div>
            <div className="flex-1 pr-4">
              <p className="font-bold text-sm md:text-base text-white leading-tight">
                {data.name} — {data.location}
              </p>
              <p className="text-amber-400 font-bold text-[11px] md:text-sm mt-0.5">
                Vừa đăng ký khoá học Content
              </p>
              <p className="text-white/40 text-[10px] md:text-xs mt-1">
                {data.time}
              </p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-white/20 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sai lầm', href: '#mistakes' },
    { name: 'Giải pháp', href: '#solution' },
    { name: 'So sánh', href: '#comparison' },
    { name: 'Lộ trình', href: '#roadmap' },
    { name: 'Giá', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">N</div>
          <span className="font-display font-black text-xl tracking-tighter text-slate-900">NGUYỄN NAM <span className="text-primary">BĐS</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-primary transition-all relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <a href="#pricing" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-2.5 md:py-3 rounded-2xl text-sm font-black shadow-[0_10px_20px_rgba(104,65,234,0.2)] transition-all hover:scale-105 active:scale-95">
            Đăng ký ngay
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-indigo-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            90% môi giới BĐS đang mắc 4 sai lầm này
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 md:mb-8 text-slate-900"
          >
            Bí mật Top 1% sale xuất sắc <br className="hidden sm:block" />
            <span className="text-primary relative inline-block">
              không muốn bạn biết
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-xl text-slate-600 mb-10 md:mb-14 max-w-2xl leading-relaxed"
          >
            Bí Kíp Video Chạm "Tử Huyệt" Khách - Mang +150 số điện thoại khách hàng mỗi tháng chỉ với Smartphone.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-md aspect-square bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[6px] md:border-[12px] border-white relative mb-16 md:mb-24 mx-auto"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_hutirh5V8s?autoplay=1&loop=1&playlist=_hutirh5V8s&controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full">
            {[
              { icon: <Target className="text-primary" />, title: "KỊCH BẢN TRIỆU ĐÔ", desc: "Biến người xem thành khách hàng chốt cọc" },
              { icon: <Smartphone className="text-primary" />, title: "CHỈ CẦN SMARTPHONE", desc: "Quay + edit ngay tại dự án cực đơn giản" },
              { icon: <TrendingDown className="text-primary" />, title: "GIẢM 50% CHI PHÍ", desc: "Lead rẻ hơn, chất lượng cao hơn đối thủ" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="font-bold text-xs md:text-sm tracking-[0.1em] uppercase mb-2 text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Mistakes = () => {
  const mistakes = [
    {
      id: 1,
      title: "Copy video đối thủ để chạy Ads",
      consequence: "Facebook \"bóp\" tương tác, báo vi phạm chính sách",
      desc: "Bạn tải video của người khác về, chỉnh sửa sơ sài rồi chạy Ads. Facebook phát hiện ngay — giảm reach, tăng CPM, thậm chí khoá tài khoản.",
      tags: ["📉 Reach bị bóp", "⚠️ Rủi ro khoá tài khoản", "🔄 Phải liên tục tìm video", "👤 Không có brand cá nhân"]
    },
    {
      id: 2,
      title: "Đổ tiền test Ads mù — không có kịch bản",
      consequence: "Mỗi tháng đốt hàng triệu nhưng chỉ nhận Click ảo",
      desc: "Quay đại một video review dự án, nói vài thông số, rồi bỏ tiền chạy Ads. Kết quả? Lead đắt, khách không nghe máy.",
      tags: ["💸 Lead 200-300k/số", "📱 Bình luận toàn \"chấm\"", "😰 Test 10 video vẫn xịt", "🔥 Càng tăng budget càng lỗ"]
    },
    {
      id: 3,
      title: "Thuê Agency / Mua khóa học lý thuyết",
      consequence: "Tốn tiền, không áp dụng được vào thực tế BĐS",
      desc: "Agency không hiểu dự án bằng bạn, chi phí quản lý 15-20%. Khóa học thì toàn mindset, không cầm tay chỉ việc.",
      tags: ["💰 Phí quản lý 20%", "📚 Lý thuyết suông", "🤷 Không biết bắt đầu từ đâu", "⏰ Mất 6 tháng vẫn dậm chân"]
    },
    {
      id: 4,
      title: "Quay video \"phèn\" — không kỹ thuật",
      consequence: "Video rung lắc, giọng run, khách lướt qua trong 1 giây",
      desc: "Ra dự án bật camera quay, nói lan man... Nhìn lại video thấy \"phèn\". Đăng lên Facebook không ai xem.",
      tags: ["📹 Hình rung lắc, tối", "🎙️ Giọng run, thiếu tự tin", "📝 Nói lan man, ko trọng tâm", "👻 Khách lướt qua ngay"]
    }
  ];

  return (
    <section id="mistakes" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-destructive tracking-[0.3em] uppercase mb-4">4 SAI LẦM PHỔ BIẾN NHẤT</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Tại sao môi giới giỏi nghề <br className="hidden sm:block" /> nhưng <span className="text-destructive underline decoration-wavy underline-offset-8 decoration-destructive/30">chạy Ads vẫn lỗ?</span></h3>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">4 sai lầm này tạo ra vòng xoáy: video rác → lead đắt → đốt tiền test → copy đối thủ bị bóp...</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-10">
            {mistakes.map((m, idx) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-8 md:gap-12 items-start relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-destructive/20 group-hover:bg-destructive transition-colors" />
                <div className="w-16 h-16 bg-destructive/5 rounded-2xl flex items-center justify-center text-destructive font-black text-3xl shrink-0">
                  {m.id}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">{m.title}</h4>
                  <p className="text-destructive font-bold text-sm md:text-base mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-destructive/30" />
                    {m.consequence}
                  </p>
                  <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">{m.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {m.tags.map(tag => (
                      <div key={tag} className="bg-slate-50 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-100 group-hover:border-destructive/10 transition-colors">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-900 text-white text-center shadow-2xl shadow-slate-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-destructive/20 to-transparent pointer-events-none" />
            <p className="text-xl md:text-2xl font-bold mb-4 relative z-10">Cả 4 sai lầm tạo thành <span className="text-destructive underline decoration-destructive/50 underline-offset-8">vòng xoáy chết</span>:</p>
            <p className="text-lg md:text-xl text-white/70 relative z-10 leading-relaxed">Video rác → Lead đắt → Copy đối thủ → Bị bóp → Thuê agency → Tốn thêm tiền → ...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const chapters = [
    { title: "Công thức kịch bản \"Win\"", desc: "Bóc tách USP dự án, viết kịch bản đánh đúng \"tử huyệt\" cảm xúc khách mua nhà. Video có kịch bản = khách dừng lại xem, để lại SĐT.", result: "🎯 Có công thức sẵn — Không còn ngồi vắt óc nghĩ tiêu đề" },
    { title: "Quay Smartphone chuyên nghiệp", desc: "Kỹ thuật thu âm rõ nét, truyền cảm ngay tại công trường dự án. Video chân thực có tỷ lệ chuyển đổi cao hơn Studio.", result: "📱 Tự tin đứng trước ống kính, không còn \"phèn\"" },
    { title: "Edit CapCut mượt mà", desc: "Hướng dẫn chỉnh sửa video trên CapCut chi tiết từ A-Z. Biến Smartphone thành Studio di động, xuất video trong 30 phút.", result: "✂️ Loay hoay phần mềm → Thành thạo như dân chuyên" },
    { title: "CTA thôi miên", desc: "Content Win có khả năng tự giảm giá CPM xuống mức thấp kỷ lục. Kịch bản đánh đúng nỗi đau + CTA đỉnh cao = Lead rẻ, chất lượng.", result: "💰 Giảm 50% chi phí Lead, không phụ thuộc Agency" },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">GIẢI PHÁP THỰC CHIẾN</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Content Ads Win giải quyết cả 4 vấn đề<br className="hidden sm:block" /><span className="text-primary">chỉ trong 5 Chương thực chiến</span></h3>
            <p className="text-slate-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">Không lý thuyết suông. Mỗi chương đều có bài tập thực hành, template sẵn, và ví dụ thực tế từ dự án BĐS.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {chapters.map((chapter, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/5 rounded-[1.25rem] flex items-center justify-center text-primary font-black text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    {idx + 1}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{chapter.title}</h4>
                </div>
                <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">{chapter.desc}</p>
                <div className="bg-primary-light/50 p-5 rounded-2xl text-primary font-bold text-sm md:text-base border border-primary/10">
                  {chapter.result}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="#pricing" className="inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white px-10 md:px-14 py-5 md:py-6 rounded-2xl text-lg md:text-xl font-black shadow-[0_20px_40px_rgba(104,65,234,0.3)] transition-all">
                SỞ HỮU CÔNG THỨC NGAY <ArrowRight size={24} />
              </a>
            </motion.div>
            <p className="mt-6 text-slate-400 font-medium flex items-center justify-center gap-2">
              <Shield size={18} /> Bảo hành hoàn tiền 7 ngày — Rủi ro bằng 0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const rows = [
    { label: "Content Video", old: "Copy đối thủ / quay đại", new: "Kịch bản \"Win\" theo công thức" },
    { label: "Kỹ thuật quay", old: "Rung lắc, ánh sáng tối, giọng run", new: "Smartphone chuyên nghiệp, thu âm nét" },
    { label: "Hậu kỳ Video", old: "Không biết dùng phần mềm gì", new: "CapCut thành thạo trong vài giờ" },
    { label: "Kịch bản", old: "Nói lan man, không CTA", new: "USP + Hook 3s + CTA thôi miên" },
    { label: "Chi phí Lead", old: "200-300k/số, khách không nghe máy", new: "Giảm 50%+, lead chất lượng cao" },
    { label: "Kết quả", old: "Càng tăng budget càng lỗ", new: "Content Win tự giảm CPM" },
    { label: "Phụ thuộc", old: "Agency / \"thầy\" chạy Ads", new: "Tự chủ 100% — không phụ thuộc ai" },
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">SO SÁNH TRỰC QUAN</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Đốt tiền mù vs <br className="hidden sm:block" /><span className="text-primary">Content Ads Win</span></h3>
          </div>

          <div className="bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-3 bg-white/10 p-6 md:p-10 font-black text-xs md:text-sm tracking-widest border-b border-white/10">
              <div className="text-white/40 uppercase">TIÊU CHÍ</div>
              <div className="text-center text-destructive uppercase">❌ CÁCH CŨ</div>
              <div className="text-center text-primary uppercase">✅ CONTENT WIN</div>
            </div>
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 md:p-10 text-sm md:text-lg items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                <div className="font-bold text-white/60 group-hover:text-white transition-colors">{row.label}</div>
                <div className="text-center text-white/30 italic">{row.old}</div>
                <div className="text-center font-black text-white">{row.new}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EssentialSkills = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">KỸ NĂNG THIẾT YẾU</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">4 Kỹ Năng <span className="text-primary">Sống Còn</span> <br className="hidden sm:block" /> Của Môi Giới 4.0</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { icon: <Search />, title: "Tìm đúng USP dự án", desc: "Nếu không làm được, dự án của bạn chả khác gì hàng ngàn tin đăng rác ngoài kia." },
              { icon: <FileText />, title: "Đóng gói kịch bản (Script)", desc: "Cách dẫn dắt từ nỗi đau đến sự sung sướng khiến khách phải nán lại xem hết Video." },
              { icon: <Film />, title: "Hậu kỳ \"Mỳ ăn liền\"", desc: "Làm video chuẩn chỉnh trên CapCut ngay tại công trường dự án chỉ trong 30 phút." },
              { icon: <MessageSquare />, title: "Tâm lý & Lời kêu gọi (CTA)", desc: "Biết cách dùng từ ngữ kích thích khách hàng tự nguyện để lại SĐT." },
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {React.cloneElement(skill.icon as React.ReactElement, { size: 36 })}
                </div>
                <h4 className="text-2xl md:text-3xl font-black mb-4 text-slate-900">{skill.title}</h4>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Bonus = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">🎁 4 BONUS ĐẶC BIỆT</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Quà tặng kèm trị giá <span className="text-primary">1.000.000đ</span></h3>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">4 công cụ thực chiến giúp bạn chốt khách nhanh hơn — chỉ có trong Gói Chiến Binh</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: "🎯", title: "Bộ \"Lọc Vàng\" 11 Câu Hỏi", desc: "Nhận diện Khách Hàng Sẵn Sàng Xuống Tiền Trong 5 Phút. Không còn mất thời gian tư vấn người \"chỉ hỏi cho vui\"." },
              { icon: "🔍", title: "Hệ Thống \"Ghi Nhớ Vạn Năng\"", desc: "Kiểm soát 1000 khách hàng mà không sót một ai. Thay thế CRM đắt đỏ bằng hệ thống đơn giản nhưng cực hiệu quả." },
              { icon: "💎", title: "File Tính \"Tự Do Tài Chính\"", desc: "Lập lộ trình trả nợ khoa học để kê cao gối ngủ mỗi đêm. Tư duy tài chính vững = bán hàng tự tin hơn." },
              { icon: "✍️", title: "Bí Mật \"Quán Quân Bán Hàng\"", desc: "Sơ đồ tư duy giúp thuộc lòng thông số dự án nhanh gấp 10 lần. Tư vấn khách không cần mở tài liệu." },
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{bonus.icon}</span>
                  <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">Miễn phí</span>
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{bonus.title}</h4>
                <p className="text-white/60 text-lg leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const steps = [
    { title: "Chương 1: Nền tảng & Kết quả", time: "05:04", desc: "Cái nhìn trực diện vào sức mạnh của Content Win — Thứ sẽ thay đổi hoàn toàn cách bạn làm Marketing." },
    { title: "Chương 2: Chiến lược nội dung", time: "14:47", desc: "Bí quyết bóc tách dự án để tìm ra \"Tử huyệt\" cảm xúc của khách mua nhà." },
    { title: "Chương 3: Lắp khung kịch bản", time: "10:03", desc: "Đóng gói mọi ý tưởng rời rạc thành một vũ khí chốt Lead sắc bén." },
    { title: "Chương 4: Sản xuất & Hậu kỳ", time: "08:07", desc: "Biến chiếc Smartphone của bạn thành Studio với phần mềm CapCut." },
    { title: "Chương 5: Tổng kết & Niềm tin", time: "04:52", desc: "Truyền năng lượng để bạn bấm nút \"Publish\" video đầu tiên." },
  ];

  return (
    <section id="roadmap" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">LỘ TRÌNH HỌC</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">LỘ TRÌNH ĐI ĐẾN <br className="hidden sm:block" /><span className="text-primary">THÀNH CÔNG</span></h3>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Mỗi chương được thiết kế bài bản để lột xác tư duy và kỹ năng của bạn từ con số 0.</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
            <div className="space-y-10 md:space-y-16">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 relative group"
                >
                  <div className="w-16 h-16 bg-white border-4 border-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary font-black text-2xl shrink-0 z-10 shadow-xl group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <h4 className="text-2xl font-bold text-slate-900 leading-tight">{step.title}</h4>
                      <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-100">
                        <Clock size={14} /> {step.time}
                      </span>
                    </div>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 36 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-3 transform -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">ĐẦU TƯ CHO KỸ NĂNG</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">499K — rẻ hơn <br className="hidden sm:block" /><span className="text-primary underline decoration-primary/20 underline-offset-8">1 ngày chạy Ads lỗ</span></h3>
            <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">Bạn đang đốt hàng triệu mỗi tháng cho video rác. Khóa học này chỉ tốn 499K một lần — và thay đổi cách bạn làm content mãi mãi.</p>
          </div>

          <div className="flex flex-col items-center mb-16">
            <p className="text-destructive font-black text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-destructive/30" />
              🔥 ƯU ĐÃI KẾT THÚC TRONG
              <span className="w-8 h-px bg-destructive/30" />
            </p>
            <div className="flex gap-4 md:gap-6">
              {[timeLeft.minutes, timeLeft.seconds].map((val, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center text-4xl md:text-5xl font-black text-primary border-b-[6px] border-primary/10">
                    {val.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 mt-3 uppercase tracking-[0.2em]">{i === 0 ? 'Phút' : 'Giây'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated Payment Section */}
          <div id="payment-info" className="mb-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
                <h4 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Shield size={18} />
                  </div>
                  Thông tin chuyển khoản
                </h4>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ngân hàng</p>
                    <p className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">VP BANK</p>
                  </div>
                  
                  <div className="group">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Số tài khoản</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl md:text-3xl font-black text-primary tracking-tighter">928231666</p>
                      <button 
                        onClick={() => navigator.clipboard.writeText('928231666')}
                        className="text-xs font-bold text-primary bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all"
                      >
                        SAO CHÉP
                      </button>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Chủ tài khoản</p>
                    <p className="text-xl md:text-2xl font-black text-slate-900">NGUYỄN VĂN NAM</p>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Nội dung chuyển khoản</p>
                    <p className="text-lg font-black text-slate-900">[SĐT của bạn] + [Tên gói]</p>
                    <p className="text-xs text-slate-500 mt-2 italic">* Ví dụ: 0988xxxxxx Chien Binh</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-xl group-hover:bg-primary/20 transition-all" />
                  <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100">
                    <img 
                      src="https://i.postimg.cc/mrjqpsDW/qr_khoa_hoc.png" 
                      alt="QR Thanh toán" 
                      className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <p className="mt-10 text-slate-500 font-medium flex items-center gap-2">
                  <Smartphone size={20} className="text-primary" /> Quét mã để thanh toán nhanh hơn
                </p>
                
                <div className="mt-12 p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 w-full">
                  <p className="text-emerald-700 font-bold mb-4">Sau khi chuyển khoản thành công:</p>
                  <a 
                    href="https://zalo.me/0924422268" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                  >
                    <MessageSquare size={20} /> GỬI BILL QUA ZALO
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Gói Tự Học */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col hover:border-primary/10 transition-all duration-500">
              <div className="mb-10">
                <h4 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">GÓI TỰ HỌC</h4>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">499.000đ</span>
                  <span className="text-slate-300 line-through text-lg font-bold">1.000K</span>
                </div>
                <p className="text-slate-500 mt-3 font-medium">Cơ bản • Truy cập trọn đời</p>
              </div>
              <ul className="space-y-5 mb-12 flex-1">
                {[
                  "Truy cập toàn bộ 05 Chương bài giảng",
                  "Tự do học mọi lúc, mọi nơi trọn đời",
                  "Tài liệu mẫu kịch bản thực chiến",
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 text-slate-600 font-medium">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
                {[
                  "Không có 4 Bonus quà tặng",
                  "Không hỗ trợ 1:1 trực tiếp",
                  "Không hỗ trợ qua Zalo",
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 text-slate-300 font-medium">
                    <XCircle className="shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 md:py-6 rounded-2xl border-2 border-slate-100 font-black text-slate-900 hover:bg-slate-50 hover:border-primary/20 transition-all duration-300"
              >
                ĐĂNG KÝ GÓI 499K
              </button>
            </div>

            {/* Gói Chiến Binh */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border-[6px] border-primary shadow-[0_40px_80px_rgba(104,65,234,0.2)] relative flex flex-col text-white transform md:scale-105 z-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2.5 rounded-full text-xs md:text-sm font-black tracking-[0.2em] shadow-xl shadow-primary/40 whitespace-nowrap">
                ⚡ 93% CHỌN GÓI NÀY
              </div>
              <div className="mb-10">
                <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">🔥 GÓI CHIẾN BINH</h4>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-black text-primary">699.000đ</span>
                  <span className="text-white/20 line-through text-lg font-bold">1.500K</span>
                </div>
                <p className="text-white/60 mt-3 font-medium">Trọn bộ + 4 Bonus + Hỗ trợ 1:1</p>
              </div>
              <ul className="space-y-5 mb-12 flex-1">
                {[
                  "Sở hữu khóa học trọn đời",
                  "Tài liệu mẫu + kịch bản thực chiến",
                  "Đặc quyền Hỗ trợ 1:1 trực tiếp",
                  "Phản hồi cực nhanh qua Zalo",
                  "Bộ \"Lọc Vàng\" 11 Câu Hỏi",
                  "Hệ Thống \"Ghi Nhớ Vạn Năng\"",
                  "File Tính \"Tự Do Tài Chính\"",
                  "Bí Mật \"Quán Quân Bán Hàng\"",
                ].map(item => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="font-bold text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 md:py-6 rounded-2xl bg-primary hover:bg-primary-hover font-black text-white shadow-[0_20px_40px_rgba(104,65,234,0.3)] transition-all hover:scale-[1.02] active:scale-95"
              >
                ĐĂNG KÝ GÓI 699K + QUÀ TẶNG
              </button>
              <p className="text-center text-[10px] md:text-xs font-bold text-white/30 mt-6 uppercase tracking-widest flex items-center justify-center gap-2">
                <Shield size={14} /> Hoàn tiền 7 ngày • Thanh toán an toàn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-primary/10 rounded-[3rem] md:rounded-[4rem] -rotate-3" />
              <img 
                src="https://i.postimg.cc/j5nWg8jz/anh_dai_dien.jpg" 
                alt="Nguyễn Nam" 
                className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl z-10 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-20 hidden md:block border border-slate-100">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Award size={28} />
                  </div>
                  <div>
                    <h5 className="font-black text-2xl text-slate-900">Top 1</h5>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Cá nhân xuất sắc</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Users size={28} />
                  </div>
                  <div>
                    <h5 className="font-black text-2xl text-slate-900">50+</h5>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Học viên thành công</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">VỀ GIẢNG VIÊN</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-900">Nguyễn Nam — <br className="hidden sm:block" /><span className="text-primary">Người kiến tạo giá trị</span></h3>
              
              <div className="space-y-6 text-slate-600 text-base md:text-xl leading-relaxed">
                <p>Từ một môi giới BĐS bình thường, Nguyễn Nam đã vươn lên trở thành <span className="text-slate-900 font-black">Chiến binh Bạch Kim — vượt chỉ tiêu 510%</span> tại Trung Thực Land.</p>
                <p>Bí quyết? Không phải ngân sách Ads khủng, mà là <span className="text-slate-900 font-black">Content đúng</span>. Anh đã tự phát triển công thức tạo video Ads BĐS "Win" chỉ với smartphone.</p>
                <p>Hiện tại, anh Nam là <span className="text-slate-900 font-black">Speaker tại các sự kiện BĐS</span>, đồng thời đào tạo trực tiếp cho hàng chục môi giới áp dụng thành công công thức này.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12">
                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-primary/10 transition-colors">
                  <p className="text-3xl md:text-4xl font-black text-primary mb-2">510%</p>
                  <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Vượt chỉ tiêu</p>
                </div>
                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-primary/10 transition-colors">
                  <p className="text-3xl md:text-4xl font-black text-primary mb-2">Speaker</p>
                  <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Diễn giả BĐS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const feedbacks = [
    { name: "Học viên ẩn danh", text: "Hay thật đó a. Trước h em chưa từng học được ở đâu chưa từng biết luôn. Đơn giản mà hiệu quả." },
    { name: "Học viên Content", text: "Cách viết content win hay quá anh ạ 🤭" },
    { name: "Trương Quốc Khánh", text: "File quá chất lượng... em áp dụng cực kỳ hiệu quả, nhanh đạt được tài chính trong năm mà mình mong muốn." },
    { name: "Trọng Hiển", text: "Toàn kiến thức mà chẳng ai dạy mình cả. Hôm nay học xong hết khóa đó, quyết định học thêm 2 khóa con lại." },
    { name: "Hồng Sâm", text: "Khóa học của e dễ hiểu, c có thể luyện tập được luôn nên c thích quá." },
    { name: "Nguyễn Thành Tài", text: "E mới bước chân vào nghề. Nên với e e học được nhiều điều lắm a. Thay đổi được góc nhìn về cách học 1 dự án." },
  ];

  const feedbackImages = [
    "https://i.postimg.cc/8kHN62Dd/z7612808083321-8d444b2adba1260eeb5fd7e8d16dd86c.jpg",
    "https://i.postimg.cc/ZYc4dGZ6/z7612808089737-334595f4632cdfa82703434ac0070300.jpg",
    "https://i.postimg.cc/WpnTkBjG/z7612808098982-699a5c952eda8e3240458503bc8a7c4e.jpg",
    "https://i.postimg.cc/Y23MW5kf/z7612808103172-deab6f11186f11060ff419e303a5fa4b.jpg",
    "https://i.postimg.cc/c1m0npZB/z7612808106792-2e195231916f548fc4dbd1d923105449.jpg",
    "https://i.postimg.cc/1RHsqkPH/z7612808111117-ea52df8c714bbd63941d22d4585f1884.jpg",
    "https://i.postimg.cc/dQBwybv6/z7612808123795-4ffaa19a439a9840a647b81a16abbb24.jpg",
    "https://i.postimg.cc/593bCh1m/z7612808126467-34694c16944d06a326e9e08ca8233cb2.jpg",
    "https://i.postimg.cc/h4rcdkgM/z7612808128478-e74704d1b3f9ac32a8b3fea6bcf324ed.jpg",
    "https://i.postimg.cc/HW2dyqHB/z7612808141286-da7ee73df50dd2637f4ba34a8260c8d2.jpg",
    "https://i.postimg.cc/QNbhT2sy/z7612808145776-829acf5ce39a75aac09149558755a122.jpg",
    "https://i.postimg.cc/MZDqQCxP/z7612808151597-3f3655a649e46a22f57b8666bf5293a6.jpg",
    "https://i.postimg.cc/3rBYvs7L/z7612808156407-12cac772c65a1996d9b955cf6194c31b.jpg",
    "https://i.postimg.cc/h4rcdkgZ/z7612808157607-d0dddf8d68c4bbce774ef47c3b00a569.jpg",
    "https://i.postimg.cc/nVkpDyZg/z7612808161467-98ebde8d322c2051537d6aa91f8bdb64.jpg",
    "https://i.postimg.cc/L4T21cRr/z7612808168080-9800c824b0773372a0bf5bcb04ac117e.jpg",
    "https://i.postimg.cc/NfjY7dfb/z7612808175604-32f91d6bc60871056d4c8b7a110064c7.jpg",
    "https://i.postimg.cc/9FQVtLFJ/z7612808184611-619dea354c101d728003d325a500f380.jpg",
    "https://i.postimg.cc/Qxdskfx6/z7612808187113-d9a04c2624c45fc3e93cf07a053d2cbd.jpg",
    "https://i.postimg.cc/vHZML0Hq/z7612808198602-cace105ef451e28f71933dccc3aefba2.jpg",
    "https://i.postimg.cc/GhmrJXhg/z7612808206051-fe7f96bd0079acf186166fd39b803831.jpg",
    "https://i.postimg.cc/jdSKQMdk/z7612808208971-d4104d308bdcf526c86edd2f970de594.jpg"
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">PHẢN HỒI HỌC VIÊN</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">Học viên nói gì về khóa học?</h3>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Feedback thật 100% từ Zalo & Facebook — minh chứng cho sự hiệu quả</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 max-w-7xl mx-auto mb-20">
          {feedbacks.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#6841ea" className="text-primary" />)}
              </div>
              <p className="text-slate-700 text-lg md:text-xl mb-8 italic leading-relaxed">"{f.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black text-xl">
                  {f.name.charAt(0)}
                </div>
                <div>
                  <span className="font-black text-slate-900 block">{f.name}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Học viên thực chiến</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Minh chứng thực tế</h4>
          <p className="text-slate-500 font-medium">Kết quả học viên áp dụng thành công công thức Content Win</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {feedbackImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-zoom-in group"
            >
              <img 
                src={img} 
                alt={`Feedback ${i + 1}`} 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Mình không biết gì về quay video. Có học được không?", a: "Hoàn toàn được! Khóa học hướng dẫn từ cách cầm điện thoại, góc quay đến cách dùng CapCut cực kỳ đơn giản. Chỉ cần bạn biết dùng smartphone là làm được." },
    { q: "Khóa học có khác gì những khóa chạy Ads ngoài kia?", a: "Khác biệt lớn nhất là tính THỰC CHIẾN. Tôi không dạy lý thuyết suông. Tôi dạy bạn cách bóc tách dự án BĐS thực tế để ra kịch bản win. Đây là kinh nghiệm từ việc chốt hàng trăm giao dịch." },
    { q: "Mình cực kỳ ngại đứng trước ống kính. Làm sao?", a: "Trong khóa học có chương riêng dạy bạn cách vượt qua nỗi sợ, cách lấy hơi, cách diễn đạt tự nhiên. Ngoài ra, tôi cũng hướng dẫn cách làm video review mà không cần lộ mặt quá nhiều." },
    { q: "Có hoàn tiền không?", a: "Có! Tôi cam kết hoàn tiền 100% trong 7 ngày nếu bạn học và làm theo hướng dẫn mà thấy không hiệu quả. Rủi ro của bạn bằng 0." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">Câu hỏi thường gặp</h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 md:p-10 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-xl md:text-2xl pr-8 text-slate-900 leading-tight">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white rotate-180' : 'text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 md:p-10 pt-0 bg-white text-slate-600 text-base md:text-xl leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Play size={20} fill="white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">CONTENT ADS WIN</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed">
              Giúp môi giới BĐS làm chủ kỹ năng sáng tạo nội dung và quảng cáo video để đột phá doanh số trong kỷ nguyên số.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Youtube', 'Tiktok'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-full" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-8">Liên kết</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#roadmap" className="hover:text-white transition-colors">Lộ trình học</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Học phí</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Cảm nhận</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Hỏi đáp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-8">Pháp lý</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách hoàn tiền</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2024 Content Ads Win. All rights reserved. Designed by Nguyễn Nam.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs max-w-md text-center md:text-right">
            <p>Sản phẩm này không thuộc Facebook hoặc Meta Inc. Facebook là nhãn hiệu của Meta, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Mistakes />
        <Solution />
        <Comparison />
        <EssentialSkills />
        <Roadmap />
        <Bonus />
        <Pricing />
        <Instructor />
        <Testimonials />

        {/* Guarantee Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 text-center shadow-2xl shadow-slate-200/50">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                <Shield size={48} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Cam Kết Hoàn Tiền 100% Trong 7 Ngày</h2>
              <p className="text-slate-600 text-xl mb-12">Học thử, áp dụng, nếu không hài lòng → hoàn tiền ngay, không hỏi lý do.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h4 className="font-black text-primary uppercase tracking-widest text-sm">🛡️ Hoàn tiền nếu:</h4>
                  <ul className="space-y-3">
                    {["Xem bài học & làm theo hướng dẫn", "Thực hiện đủ 72 giờ", "Và thấy không phù hợp"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-primary" size={20} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-destructive uppercase tracking-widest text-sm">❌ Không hoàn tiền nếu:</h4>
                  <ul className="space-y-3">
                    {["Mua vì tò mò", "Mua rồi không làm"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-slate-400">
                        <XCircle size={20} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* Final CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-bold text-white/60 tracking-[0.3em] uppercase mb-6">LỰA CHỌN RẤT RÕ RÀNG</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">Tiếp tục đốt tiền chạy video rác hay sở hữu <br /> <span className="text-slate-900">Công Thức Content Win?</span></h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#pricing" className="bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl transition-all hover:scale-105 active:scale-95">
                  BẮT ĐẦU NGAY CHỈ TỪ 499K
                </a>
              </div>
              <p className="text-white/60 mt-8 font-medium">🔒 Bảo hành hoàn tiền 7 ngày — không rủi ro</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FOMOPopup />
      <RegistrationPopup />

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-md flex gap-3">
        <button 
          onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-black shadow-[0_10px_30px_rgba(104,65,234,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <ArrowRight size={18} /> ĐĂNG KÝ
        </button>
        <a 
          href="https://zalo.me/0924422268" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <MessageSquare size={18} /> TƯ VẤN ZALO
        </a>
      </div>
    </div>
  );
}
