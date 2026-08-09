import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Brain, 
  BookOpen, 
  Mic, 
  Layers, 
  Target, 
  GraduationCap, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Zap, 
  ShieldCheck, 
  Play, 
  Users, 
  BrainCircuit, 
  Sun, 
  Moon, 
  LogOut,
  ExternalLink
} from 'lucide-react';
import { User } from 'firebase/auth';
import { cn } from '../lib/utils';
import ThreeBackground from './ThreeBackground';

interface LandingPageProps {
  user: User | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onEnterWorkspace: () => void;
  onSignOut: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenUniversityTracker: () => void;
  onOpenScholarshipTracker: () => void;
  onOpenUpgrade?: () => void;
}

export default function LandingPage({
  user,
  onOpenAuth,
  onEnterWorkspace,
  onSignOut,
  isDarkMode,
  onToggleDarkMode,
  onOpenUniversityTracker,
  onOpenScholarshipTracker,
  onOpenUpgrade,
}: LandingPageProps) {
  const [activeFeatureTab, setActiveFeatureTab] = useState<'voice' | 'notebook' | 'flashcards' | 'quiz' | 'mindmap'>('voice');

  const featureDetails = {
    voice: {
      title: "Talk With Your AI Voice Teacher",
      description: "Speak directly with your AI study buddy using your voice. Ask questions, get quick spoken answers, and practice out loud.",
      badge: "Voice Tutor",
      highlights: ["Adapts to your grade level", "Instant spoken answers", "Helps explain tough concepts"],
      accentColor: "bg-blue-600"
    },
    notebook: {
      title: "All-In-One Study Notebooks",
      description: "Upload PDFs, textbook pages, lecture slides, video links, and notes into neat notebooks that answer your exact questions.",
      badge: "Document Hub",
      highlights: ["Supports PDFs, Images, Videos & Notes", "Accurate answers from your files", "Easy source checking"],
      accentColor: "bg-indigo-600"
    },
    flashcards: {
      title: "Smart 3D Flashcards",
      description: "Auto-generated digital flashcards that help you practice active memory recall so you remember facts easily before tests.",
      badge: "Smart Flashcards",
      highlights: ["3D card flip animation", "Rate difficulty (Easy, Good, Hard)", "Track your memory score"],
      accentColor: "bg-emerald-600"
    },
    quiz: {
      title: "Practice Quiz Generator",
      description: "Create custom practice quizzes based on your study materials. Get instant grading and step-by-step answers.",
      badge: "Practice Quizzes",
      highlights: ["Multiple choice & short questions", "Find your weak study areas", "Clear step-by-step explanations"],
      accentColor: "bg-amber-600"
    },
    mindmap: {
      title: "Visual Concept Mind Map",
      description: "See how key topics connect with simple, interactive visual diagrams that break down big subjects.",
      badge: "Visual Maps",
      highlights: ["Auto-created topic trees", "Click nodes for simple summaries", "Easy zoom & drag view"],
      accentColor: "bg-purple-600"
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfcfb] dark:bg-[#030712] text-slate-950 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={onEnterWorkspace}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                  AI Study <span className="text-blue-600">BUDDY</span>
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hidden sm:block">Multi-Source Grounded Tutor</p>
            </div>
          </div>

          {/* Quick Nav Links (No stickers/badges) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How It Works</a>
            <button onClick={onOpenUniversityTracker} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Uni Tracker
            </button>
            <button onClick={onOpenScholarshipTracker} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Scholarships
            </button>
            <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Reviews</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onToggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shrink-0"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={onEnterWorkspace}
                  className="px-4 sm:px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BrainCircuit className="w-4 h-4" /> <span className="hidden sm:inline">Go To</span> Workspace
                </button>
                <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                  <button
                    onClick={onSignOut}
                    className="p-2 text-slate-500 hover:text-rose-600 transition-colors"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('signin')}
                  className="px-3.5 sm:px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-3.5 sm:px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Sign Up Free</span><span className="sm:hidden">Start</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
        {/* Interactive 3D Canvas Background */}
        <ThreeBackground isDarkMode={isDarkMode} className="opacity-70 dark:opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          
          {/* Status Badge (No gradients) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-md"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">
              Smart AI Study Assistant
            </span>
            <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-black rounded-md uppercase">
              v3.8
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.0] text-slate-950 dark:text-white max-w-5xl mx-auto"
          >
            Study <span className="text-blue-600 dark:text-blue-500">10x Faster</span> & Ace Your Exams
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed px-2"
          >
            Turn your textbooks, notes, PDFs, and video lessons into easy summaries, flashcards, practice quizzes, and AI voice study help.
          </motion.p>

          {/* Primary Action Buttons (Full screen triggers) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-xl mx-auto"
          >
            <button
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onEnterWorkspace}
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 text-slate-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-blue-600" />
              <span>Explore Demo Mode</span>
            </button>
          </motion.div>

          {/* Quick Trackers Nav Buttons (No stickers) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenUniversityTracker}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>University Match Tracker</span>
            </button>
            <button
              onClick={onOpenScholarshipTracker}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Global Scholarships Hub</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400 text-xs font-bold"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
              <span className="ml-2 text-slate-900 dark:text-white font-black">4.9 / 5.0 Rating</span>
            </div>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Used by 50,000+ students globally</span>
            </div>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Hallucination Grounded AI</span>
            </div>
          </motion.div>

          {/* Hero Feature Showcase Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-6 max-w-6xl mx-auto"
          >
            <div className="relative rounded-[2.5rem] p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-left space-y-4">
              
              {/* Window Frame Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono font-bold text-slate-400 hidden sm:inline">ai-study-buddy.app / workspace</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400">
                  <Zap className="w-3.5 h-3.5 fill-current text-amber-500" /> SOTA Gemini Grounded Engine
                </div>
              </div>

              {/* Showcase Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600 text-white rounded-xl">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-slate-900 dark:text-white">Live Voice Teacher</h4>
                      <p className="text-[10px] text-blue-600 font-bold uppercase">Bi-directional Speech</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    "Explain quantum tunneling like I'm 15." — Speaks out loud with age-adapted explanations in real-time.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-600 text-white rounded-xl">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-slate-900 dark:text-white">Multi-Source Notebook</h4>
                      <p className="text-[10px] text-indigo-600 font-bold uppercase">Textbooks, Videos & PDFs</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Synthesizes multiple sources simultaneously with exact page citations and zero hallucination guarantee.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-slate-900 dark:text-white">3D Active Recall</h4>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase">Spaced Repetition</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Auto-generated 3D flip cards using SM-2 cognitive memory algorithms so facts stay locked in long term.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Section: Features */}
      <section id="features" className="pt-10 pb-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
              Everything You Need To Ace Any Subject
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Click any feature below to see how AI Study BUDDY helps you study faster and get better grades.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'voice', label: 'Voice Teacher', icon: Mic },
              { id: 'notebook', label: 'Notebook Hub', icon: BookOpen },
              { id: 'flashcards', label: '3D Flashcards', icon: Layers },
              { id: 'quiz', label: 'Test Maker', icon: Target },
              { id: 'mindmap', label: 'Mind Map', icon: BrainCircuit }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFeatureTab(tab.id as any)}
                className={cn(
                  "px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border",
                  activeFeatureTab === tab.id 
                    ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105" 
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-500"
                )}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Showcase Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-5">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-black uppercase tracking-widest rounded-md">
                  {featureDetails[activeFeatureTab].badge}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                  {featureDetails[activeFeatureTab].title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                  {featureDetails[activeFeatureTab].description}
                </p>

                <div className="space-y-2.5 pt-1">
                  {featureDetails[activeFeatureTab].highlights.map((h, i) => (
                    <div key={`feat-hl-${activeFeatureTab}-${i}`} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onEnterWorkspace}
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Try This Feature Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Demo Card */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-slate-300">SYSTEM PREVIEW</span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-blue-400 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800">
                    SOTA Gemini Engine
                  </span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Input Query</div>
                  <p className="text-xs font-medium italic text-slate-200">
                    "Analyze Chapter 4 on Neural Network Backpropagation and generate flashcards for key formulas."
                  </p>
                </div>

                <div className="p-4 bg-blue-950/60 rounded-xl border border-blue-900/80 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" /> Output Generated
                  </div>
                  <p className="text-xs font-bold text-white leading-relaxed">
                    "Created 8 synthesis flashcards, 1 interactive quiz, and updated your weak areas: Partial Derivatives chain rule."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Section: How It Works */}
      <section id="how-it-works" className="pt-10 pb-16 bg-[#fdfcfb] dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
              How AI Study BUDDY Works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Easily upload study files, practice with smart flashcards, find scholarships, and match with top universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Upload & Analyze</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Drop your PDFs, lecture slides, or textbook images into the workspace. The grounded Gemini neural engine parses chapters instantly.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Adapt & Practice</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Adjust explanation age from 7 to 50. Generate interactive 3D mind maps, active recall quizzes, audio podcasts, and formula cheat sheets.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Match Universities</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Input your GPA and location (Nepal, Pakistan, US, UK, Global). View real-world top university recommendations, acceptance rates, and export PDF reports.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-black text-sm flex items-center justify-center">
                04
              </div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Claim Scholarships</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Find 100% fully funded merit grants, stipends, and tuition waivers. Save active grants and review step-by-step document preparation guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. University & Scholarship Trackers Highlights (Solid Accent, No Sticker) */}
      <section className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-400 border border-blue-800 rounded-lg text-xs font-black uppercase tracking-widest">
                Beyond Classrooms
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-tight">
                Global University & Scholarship Hub
              </h2>

              <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
                Track admissions deadlines, acceptance rates, tuition costs, and merit-based grants for top universities worldwide with automated AI application guidance.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={onOpenUniversityTracker}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Explore Universities
                </button>
                <button
                  onClick={onOpenScholarshipTracker}
                  className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Find Scholarships
                </button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-black text-amber-400">500+</div>
                <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Top Universities</div>
              </div>
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400">$100M+</div>
                <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Scholarships</div>
              </div>
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-black text-blue-400">98.4%</div>
                <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Exam Pass Rate</div>
              </div>
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-black text-purple-400">24/7</div>
                <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Instant AI Tutor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Testimonials */}
      <section id="testimonials" className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            Loved By Students Everywhere
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "The voice teacher mode completely saved my Organic Chemistry grade. I can talk through mechanism reactions out loud and get instant corrections.",
              name: "Maya Lin",
              role: "Pre-Med Student, Stanford",
              rating: 5,
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
            },
            {
              quote: "Uploading entire 200-page medical textbooks and asking questions grounded specifically in my syllabus gave me the top score in my class.",
              name: "David Chen",
              role: "Biomedical Engineering, MIT",
              rating: 5,
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
            },
            {
              quote: "The 3D flashcards with SM-2 spaced repetition meant I only spent 15 minutes a day reviewing and aced my finals without all-nighters.",
              name: "Sophia Rodriguez",
              role: "Law Scholar, Oxford",
              rating: 5,
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
            }
          ].map((t, idx) => (
            <div key={`testimonial-${idx}-${t.name}`} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={`testimonial-star-${idx}-${i}`} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-xl object-cover border border-blue-500/30" />
                <div>
                  <h4 className="font-black text-xs text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Section: Pricing */}
      <section id="pricing" className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            Choose Your AI Study Plan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm font-medium">
            Start free with 10 AI study sessions and searches or unlock unlimited grounded study guides, voice tutoring, and global university tracking with Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-black uppercase tracking-wider">Free Starter</span>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Free Plan</h3>
                <p className="text-xs text-slate-500 font-medium">10 Free Uses Included</p>
              </div>
              <div className="text-3xl font-black text-slate-950 dark:text-white">$0 <span className="text-xs text-slate-500 font-medium">/ forever</span></div>

              <ul className="space-y-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10 Free AI Study Analyses & Searches</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Grounded Syllabus Search</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Basic Flashcard Creation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> English & Multilingual AI Support</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenAuth('signup')}
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all cursor-pointer"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Plan (Solid Accent, No Gradient) */}
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border-2 border-blue-600 shadow-xl relative flex flex-col justify-between space-y-6">
            <div className="absolute -top-3.5 right-6 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-current" /> Most Popular
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <span className="px-3 py-1 bg-blue-950 text-blue-400 rounded-lg text-xs font-black uppercase tracking-wider border border-blue-800">Pro Mastery</span>
                <h3 className="text-2xl font-black text-white">Pro Unlimited</h3>
                <p className="text-xs text-slate-400 font-medium">For students aiming for top academic grades</p>
              </div>

              <div className="space-y-0.5">
                <div className="text-3xl font-black text-white">$3.99 <span className="text-xs text-slate-400 font-medium">/ month</span></div>
                <p className="text-xs font-mono font-bold text-emerald-400">or $30.99 / year (Save 35%) • Rs. 1,100/mo</p>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> <strong>Unlimited</strong> AI Study Guides & Analyses</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> <strong>SOTA Gemini Voice API</strong> (Real-time Speech)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> <strong>Multilingual AI</strong> (Urdu, Arabic, Spanish, French, Hindi)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> <strong>Global University Matcher</strong> & Scholarship Search</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> <strong>Real-time Group Study</strong> & Collaborative Workspaces</li>
              </ul>
            </div>

            <button
              onClick={() => {
                if (onOpenUpgrade) onOpenUpgrade();
                else onEnterWorkspace();
              }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Upgrade To Pro ($3.99/mo)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Final Call To Action (Solid Blue Background) */}
      <section className="pt-6 pb-16 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
        <div className="p-8 sm:p-14 bg-blue-600 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Ready To Supercharge Your Grades?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-medium max-w-xl mx-auto">
            Create your free account now and start studying smarter with grounded AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-8 py-4 bg-white text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Sign Up Free Now
            </button>
            <button
              onClick={onEnterWorkspace}
              className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-all cursor-pointer border border-blue-500"
            >
              Try Demo Mode
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs font-bold text-slate-500 dark:text-slate-400">
        <p className="uppercase tracking-widest flex flex-wrap items-center justify-center gap-2">
          <span>AI STUDY BUDDY PRO • CREATED BY AYAN AHMED</span>
          <span>•</span>
          <span>CONTACT: <a href="mailto:ayaicrypcoin@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-mono lowercase">ayaicrypcoin@gmail.com</a></span>
        </p>
        <p className="mt-1 font-medium text-[11px] text-slate-400">Educational grounded study engine powered by Gemini AI.</p>
      </footer>

    </div>
  );
}
