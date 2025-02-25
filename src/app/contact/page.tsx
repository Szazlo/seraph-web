'use client';

import { useState } from 'react';
import { Mail, Bug, Lightbulb, Send } from 'lucide-react';

type TabType = 'enquiry' | 'bug' | 'suggestion';

export default function Contact() {
    const [activeTab, setActiveTab] = useState<TabType>('enquiry');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const tabs = [
        { id: 'enquiry' as TabType, label: 'General Enquiry', icon: Mail, colour: 'emerald' },
        { id: 'bug' as TabType, label: 'Report Bug', icon: Bug, colour: 'red' },
        { id: 'suggestion' as TabType, label: 'Suggestion', icon: Lightbulb, colour: 'amber' }
    ];

    const placeholders = {
        enquiry: 'Tell us how we can help you...',
        bug: 'Please describe the bug and steps to reproduce it...',
        suggestion: 'Share your ideas for improving Seraph...'
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Have a question or feedback? We'd love to hear from you.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="bg-slate-800 rounded-lg p-8">
                    <div className="flex space-x-2 mb-8">
                        {tabs.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${activeTab === id
                                    ? 'bg-emerald-400/10 text-emerald-400'
                                    : 'hover:bg-slate-700 text-slate-400'}`}
                            >
                                <Icon className="w-4 h-4 mr-2" />
                                {label}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 focus:outline-none text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 focus:outline-none text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder={placeholders[activeTab]}
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 focus:outline-none text-white"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg flex items-center justify-center text-lg font-semibold"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}