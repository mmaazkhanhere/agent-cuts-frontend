
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus, PlusCircle, Trash2, Settings, Clock, Search } from 'lucide-react';

// Mock data
const recentUploads = [
  {
    id: '1',
    title: 'Interview with AI expert',
    date: '2023-05-12',
    thumbnail: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop',
    duration: '1:25:32',
    clipsCount: 8
  },
  {
    id: '2',
    title: 'Podcast about tech trends',
    date: '2023-05-10',
    thumbnail: 'https://images.unsplash.com/photo-1639318853588-fd36df8c547a?q=80&w=1778&auto=format&fit=crop',
    duration: '45:18',
    clipsCount: 6
  },
  {
    id: '3',
    title: 'Educational lecture on machine learning',
    date: '2023-05-05',
    thumbnail: 'https://images.unsplash.com/photo-1632915505407-cbe3522341a9?q=80&w=1771&auto=format&fit=crop',
    duration: '2:10:45',
    clipsCount: 12
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-white/70">Manage your videos and generated clips</p>
            </div>
            
            <Button 
              asChild
              className="bg-gradient-purple hover:opacity-90"
            >
              <Link to="/upload">
                <PlusCircle className="mr-2 h-5 w-5" /> Upload New Video
              </Link>
            </Button>
          </div>
          
          <div className="bg-clipgenius-dark-card border border-clipgenius-dark-border rounded-lg p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-xl font-medium text-white">Recent Uploads</h2>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="pl-10 py-2 pr-4 bg-clipgenius-dark-bg border border-clipgenius-dark-border rounded-md text-white/90 w-full focus:outline-none focus:border-clipgenius-purple"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentUploads.map((upload) => (
                <div key={upload.id} className="bg-clipgenius-dark-bg border border-clipgenius-dark-border rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={upload.thumbnail} 
                      alt={upload.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      {upload.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-white mb-1 line-clamp-1">{upload.title}</h3>
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{new Date(upload.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{upload.clipsCount} clips</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-clipgenius-purple/50 text-clipgenius-purple hover:bg-clipgenius-purple/20"
                      >
                        View Clips
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-clipgenius-dark-bg border border-dashed border-clipgenius-dark-border rounded-lg flex flex-col items-center justify-center p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-clipgenius-purple/10 flex items-center justify-center mb-4">
                  <Plus className="h-6 w-6 text-clipgenius-purple" />
                </div>
                <p className="text-white/70 text-center mb-4">Upload a new video and let AI create clips for you</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-clipgenius-purple/50 text-clipgenius-purple hover:bg-clipgenius-purple/20"
                >
                  <Link to="/upload">Upload Video</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-clipgenius-dark-card border border-clipgenius-dark-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-4">Analytics Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Total Videos</span>
                    <span className="text-white font-medium">12</span>
                  </div>
                  <div className="w-full bg-clipgenius-dark-bg h-1.5 rounded-full">
                    <div className="bg-gradient-purple h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Generated Clips</span>
                    <span className="text-white font-medium">87</span>
                  </div>
                  <div className="w-full bg-clipgenius-dark-bg h-1.5 rounded-full">
                    <div className="bg-gradient-purple h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Storage Used</span>
                    <span className="text-white font-medium">3.2 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-clipgenius-dark-bg h-1.5 rounded-full">
                    <div className="bg-gradient-purple h-full rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-clipgenius-dark-card border border-clipgenius-dark-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-4">Top Performing Clips</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-16 h-9 rounded bg-clipgenius-dark-bg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop" alt="Clip thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-white text-sm font-medium line-clamp-1">The Future of AI in 2025</h4>
                    <p className="text-white/60 text-xs">Virality score: 9.2</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-16 h-9 rounded bg-clipgenius-dark-bg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1639318853588-fd36df8c547a?q=80&w=1778&auto=format&fit=crop" alt="Clip thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-white text-sm font-medium line-clamp-1">5 Machine Learning Trends</h4>
                    <p className="text-white/60 text-xs">Virality score: 8.7</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-16 h-9 rounded bg-clipgenius-dark-bg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1632915505407-cbe3522341a9?q=80&w=1771&auto=format&fit=crop" alt="Clip thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-white text-sm font-medium line-clamp-1">AI Ethics Explained</h4>
                    <p className="text-white/60 text-xs">Virality score: 8.4</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-clipgenius-dark-card border border-clipgenius-dark-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-4">Upgrade Plan</h3>
              <p className="text-white/70 mb-4">
                You're currently on the <span className="text-white font-medium">Free Plan</span>. 
                Upgrade to process longer videos and generate more clips.
              </p>
              <div className="p-4 bg-gradient-purple/10 border border-clipgenius-purple/20 rounded-lg mb-4">
                <h4 className="text-white font-medium mb-2">Pro Plan Benefits:</h4>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Process videos up to 4 hours long</li>
                  <li>• Generate unlimited clips</li>
                  <li>• Advanced editing features</li>
                  <li>• Priority processing</li>
                </ul>
              </div>
              <Button className="w-full bg-gradient-purple hover:opacity-90">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
