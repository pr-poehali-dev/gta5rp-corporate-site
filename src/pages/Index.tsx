import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О корпорации', icon: 'Building2' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'leadership', label: 'Руководство', icon: 'Users' },
  ];

  const news = [
    {
      id: 1,
      title: 'Kingsman расширяет влияние в Downtown',
      date: '05.11.2025',
      content: 'Корпорация Kingsman успешно завершила сделку по приобретению элитной недвижимости в центре города.',
    },
    {
      id: 2,
      title: 'Новое партнёрство с международными инвесторами',
      date: '01.11.2025',
      content: 'Подписано соглашение о стратегическом партнёрстве с ведущими инвесторами из Liberty City.',
    },
    {
      id: 3,
      title: 'Kingsman признан лучшим работодателем года',
      date: '28.10.2025',
      content: 'По результатам независимого исследования, наша корпорация получила премию за лучшие условия труда.',
    },
  ];

  const leadership = [
    {
      name: 'Джеймс Кингсман',
      position: 'Генеральный директор',
      description: 'Основатель и идейный вдохновитель корпорации с 15-летним опытом в бизнесе.',
    },
    {
      name: 'Виктория Стерлинг',
      position: 'Финансовый директор',
      description: 'Эксперт в области корпоративных финансов и международных инвестиций.',
    },
    {
      name: 'Александр Нуар',
      position: 'Директор по развитию',
      description: 'Отвечает за стратегическое планирование и расширение бизнеса.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      <div className="relative z-10">
        <header className="border-b border-gold/20 backdrop-blur-md bg-black/40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="https://cdn.poehali.dev/files/fe2223f8-1842-4860-b799-0b4df8b3fde0.png" 
                  alt="Kingsman Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-serif text-gold">Kingsman</h1>
                  <p className="text-xs text-gold/70 tracking-widest">CORPORATION</p>
                </div>
              </div>
              
              <nav className="hidden md:flex gap-2">
                {navigation.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? 'default' : 'ghost'}
                    onClick={() => setActiveSection(item.id)}
                    className={`gap-2 ${
                      activeSection === item.id 
                        ? 'bg-gold text-black hover:bg-gold/90' 
                        : 'text-gold hover:bg-gold/10'
                    }`}
                  >
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            <nav className="md:hidden flex gap-2 mt-4 overflow-x-auto">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  size="sm"
                  className={`gap-2 whitespace-nowrap ${
                    activeSection === item.id 
                      ? 'bg-gold text-black hover:bg-gold/90' 
                      : 'text-gold hover:bg-gold/10'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {activeSection === 'home' && (
            <div className="animate-fade-in">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-6xl md:text-8xl font-serif text-gold mb-6 animate-scale-in">
                  Kingsman
                </h2>
                <div className="h-1 w-32 bg-gold mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Элитная корпорация, определяющая стандарты бизнеса в Лос-Сантосе. 
                  Мы создаём будущее через инновации, надёжность и безупречный сервис.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-6 hover:bg-black/70 transition-all hover:scale-105">
                  <Icon name="TrendingUp" size={40} className="text-gold mb-4" />
                  <h3 className="text-xl font-serif text-gold mb-2">Рост и развитие</h3>
                  <p className="text-gray-400">Стабильный рост и расширение присутствия на рынке</p>
                </Card>

                <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-6 hover:bg-black/70 transition-all hover:scale-105">
                  <Icon name="Shield" size={40} className="text-gold mb-4" />
                  <h3 className="text-xl font-serif text-gold mb-2">Надёжность</h3>
                  <p className="text-gray-400">Гарантия безопасности и конфиденциальности</p>
                </Card>

                <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-6 hover:bg-black/70 transition-all hover:scale-105">
                  <Icon name="Award" size={40} className="text-gold mb-4" />
                  <h3 className="text-xl font-serif text-gold mb-2">Престиж</h3>
                  <p className="text-gray-400">Высочайшие стандарты качества и сервиса</p>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <h2 className="text-5xl font-serif text-gold mb-8 text-center">О корпорации</h2>
              <div className="h-1 w-32 bg-gold mx-auto mb-12"></div>
              
              <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-8 mb-8">
                <h3 className="text-2xl font-serif text-gold mb-4">Наша история</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Kingsman была основана в самом сердце Лос-Сантоса группой амбициозных предпринимателей, 
                  стремившихся создать корпорацию нового уровня. За годы работы мы превратились в одну из 
                  самых влиятельных и уважаемых организаций города.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Сегодня Kingsman — это синоним успеха, надёжности и элитарности. Мы работаем в сферах 
                  недвижимости, инвестиций, консалтинга и развлечений, устанавливая новые стандарты 
                  качества на каждом шаге.
                </p>
              </Card>

              <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-8 mb-8">
                <h3 className="text-2xl font-serif text-gold mb-4">Наша миссия</h3>
                <p className="text-gray-300 leading-relaxed">
                  Создавать ценность для наших клиентов и партнёров через инновационные решения, 
                  безупречный сервис и неукоснительное следование высочайшим стандартам бизнес-этики.
                </p>
              </Card>

              <Card className="bg-black/60 border-gold/30 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-serif text-gold mb-4">Наши ценности</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Честность и прозрачность во всех сделках</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Стремление к совершенству и инновациям</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Уважение к клиентам и партнёрам</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Социальная ответственность перед городом</span>
                  </li>
                </ul>
              </Card>
            </div>
          )}

          {activeSection === 'news' && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <h2 className="text-5xl font-serif text-gold mb-8 text-center">Новости</h2>
              <div className="h-1 w-32 bg-gold mx-auto mb-12"></div>
              
              <div className="space-y-6">
                {news.map((item) => (
                  <Card 
                    key={item.id} 
                    className="bg-black/60 border-gold/30 backdrop-blur-sm p-6 hover:bg-black/70 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gold/10 p-3 rounded-full">
                        <Icon name="Newspaper" className="text-gold" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                          <h3 className="text-xl font-serif text-gold">{item.title}</h3>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'leadership' && (
            <div className="animate-fade-in max-w-5xl mx-auto">
              <h2 className="text-5xl font-serif text-gold mb-8 text-center">Руководство корпорации</h2>
              <div className="h-1 w-32 bg-gold mx-auto mb-12"></div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {leadership.map((person, index) => (
                  <Card 
                    key={index} 
                    className="bg-black/60 border-gold/30 backdrop-blur-sm p-6 hover:bg-black/70 transition-all hover:scale-105"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon name="User" className="text-gold" size={40} />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-gold text-center mb-2">{person.name}</h3>
                    <p className="text-gold/70 text-sm text-center mb-4 tracking-wide">{person.position}</p>
                    <p className="text-gray-400 text-sm text-center leading-relaxed">{person.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>

        <footer className="border-t border-gold/20 backdrop-blur-md bg-black/40 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/files/fe2223f8-1842-4860-b799-0b4df8b3fde0.png" 
                  alt="Kingsman Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-gold font-serif text-lg">Kingsman Corporation</p>
                  <p className="text-xs text-gray-500">Los Santos, GTA 5 RP</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">© 2025 Kingsman. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
