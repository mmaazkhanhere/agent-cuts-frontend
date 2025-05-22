
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Play, Edit3, Share2, Flame } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface Clip {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  viralityScore: number;
  tags: string[];
}

interface ClipResultsProps {
  clips: Clip[];
  originalFileName: string;
}

const ClipCard: React.FC<{ clip: Clip }> = ({ clip }) => {
  const { toast } = useToast();
  
  const handlePreview = () => {
    toast({
      title: "Preview feature",
      description: "Preview functionality will be available soon!",
    });
  };
  
  const handleDownload = () => {
    toast({
      title: "Download initiated",
      description: "Your clip is being prepared for download.",
    });
  };
  
  const handleEdit = () => {
    toast({
      title: "Edit feature",
      description: "Edit functionality will be available soon!",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share feature",
      description: "Share functionality will be available soon!",
    });
  };
  
  const getViralityColor = (score: number) => {
    if (score >= 8) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-orange-500";
  };
  
  return (
    <div className="clip-card">
      <div className="relative mb-3 overflow-hidden rounded-md aspect-video group">
        <img 
          src={clip.thumbnailUrl} 
          alt={clip.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full bg-clipgenius-purple/80 border-none hover:bg-clipgenius-purple"
            onClick={handlePreview}
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
          {clip.duration}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-white line-clamp-2" title={clip.title}>
            {clip.title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Flame className={`h-4 w-4 ${getViralityColor(clip.viralityScore)}`} />
            <span className={`text-sm font-medium ${getViralityColor(clip.viralityScore)}`}>
              {clip.viralityScore}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {clip.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-clipgenius-dark-bg rounded-full text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-transparent border-clipgenius-purple/50 text-clipgenius-purple hover:bg-clipgenius-purple/20 flex-1"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-white/70 hover:text-white hover:bg-white/10"
          onClick={handleEdit}
        >
          <Edit3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-white/70 hover:text-white hover:bg-white/10"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const ClipResults: React.FC<ClipResultsProps> = ({ clips, originalFileName }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-white mb-2">
          Generated Clips
        </h2>
        <p className="text-white/60">
          {clips.length} clips generated from {originalFileName}
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clips.map(clip => (
          <ClipCard key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  );
};

export default ClipResults;
