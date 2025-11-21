import React, { useState } from 'react';
import { Button } from '../ui/button';
import { LegoCard } from '../ui/LegoCard';
import { Copy, Mail, Check } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "janvical15@gmail.com";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for environments where Clipboard API is blocked (like certain iframes)
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Ensure it's not visible but part of the DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        return successful;
      } catch (fallbackErr) {
        console.error('Copy failed:', fallbackErr);
        return false;
      }
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(email);
    
    if (success) {
      setCopied(true);
      toast.custom((t) => (
        <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 min-w-[300px]">
          <div className="bg-green-500 border-2 border-black p-1 flex-shrink-0">
            <Check className="w-6 h-6 text-white stroke-[4]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black uppercase text-xl leading-none">Copied!</span>
            <span className="font-bold text-sm">Ready to paste</span>
          </div>
        </div>
      ));
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      toast.custom((t) => (
        <div className="bg-red-500 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 text-white min-w-[300px]">
           <span className="font-black uppercase text-lg">Copy Failed</span>
        </div>
      ));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
       <div className="mb-12 text-center">
          <div className="inline-block bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start<br/>Building
            </h2>
          </div>
          <p className="text-xl font-bold bg-black text-white inline-block p-2 border-2 border-white">
            No forms. No fluff. Just direct communication.
          </p>
       </div>

       <LegoCard color="yellow" studs={8} className="max-w-2xl mx-auto text-center">
          <div className="py-8 px-4">
             <h3 className="text-2xl font-black uppercase mb-8">
               Send Your Blueprints To:
             </h3>

             <div className="relative group max-w-md mx-auto mb-8">
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                <div className="relative bg-white border-4 border-black p-4 md:p-6 flex items-center justify-center gap-2 md:gap-4">
                   <Mail className="w-8 h-8 flex-shrink-0" />
                   <span className="text-lg md:text-2xl font-black tracking-tight break-all md:break-normal md:whitespace-nowrap select-all">
                     {email}
                   </span>
                </div>
             </div>

             <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCopy}
                  className="h-14 px-8 text-lg rounded-none border-4 border-black bg-white hover:bg-gray-100 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase transition-all flex items-center gap-2"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied!" : "Copy Address"}
                </Button>
             </div>

             <div className="mt-12 pt-8 border-t-4 border-black/10">
                <p className="font-bold text-lg">
                   Currently available for freelance projects and remote roles.
                </p>
             </div>
          </div>
       </LegoCard>
    </section>
  );
};
