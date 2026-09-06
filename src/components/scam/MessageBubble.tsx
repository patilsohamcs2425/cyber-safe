import React from 'react';
import { ExternalLink, AlertTriangle, CheckCheck } from 'lucide-react';
import type { ScamScenario } from '../../data/scamScenarios';

interface MessageBubbleProps {
  scenario: ScamScenario;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ scenario }) => {
  // WhatsApp Style (Authentic mobile chat look)
  if (scenario.appType === 'whatsapp') {
    return (
      <div className="space-y-3 font-sans">
        {/* WhatsApp Header */}
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-sm">
            {scenario.senderName.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-bold text-slate-900 truncate">
              {scenario.senderName}
            </h4>
            <p className="text-[11px] text-slate-500 font-mono">
              {scenario.senderHandleOrNumber}
            </p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            WhatsApp
          </span>
        </div>

        {/* Chat Bubble on subtle tinted WhatsApp canvas */}
        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white text-slate-900 p-3.5 shadow-sm border border-slate-200 space-y-2">
          <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed text-slate-800">
            {scenario.messageText}
          </p>

          {/* Attachment Preview */}
          {scenario.attachment && (
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-emerald-200">
              <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold mb-0.5">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="truncate">{scenario.attachment.title}</span>
              </div>
              <p className="text-[11px] text-slate-600">
                {scenario.attachment.description}
              </p>
            </div>
          )}

          <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
            <span>{scenario.timestamp}</span>
            <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
          </div>
        </div>
      </div>
    );
  }

  // Instagram Style
  if (scenario.appType === 'instagram') {
    return (
      <div className="space-y-3 font-sans">
        {/* Instagram Header */}
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shrink-0">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-900">
              IG
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-bold text-slate-900 truncate">
              {scenario.senderName}
            </h4>
            <p className="text-[11px] text-purple-600 font-medium">
              {scenario.senderHandleOrNumber}
            </p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">
            Instagram DM
          </span>
        </div>

        {/* Message Bubble */}
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-slate-100 text-slate-900 p-3.5 shadow-sm border border-slate-200 space-y-2">
          <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed text-slate-800">
            {scenario.messageText}
          </p>

          {scenario.attachment && (
            <div className="mt-2 p-2.5 rounded-xl bg-white border border-slate-200">
              <p className="text-xs font-semibold text-purple-700 truncate">
                {scenario.attachment.title}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {scenario.attachment.description}
              </p>
            </div>
          )}

          <p className="text-[10px] text-right text-slate-400">{scenario.timestamp}</p>
        </div>
      </div>
    );
  }

  // UPI Style
  if (scenario.appType === 'upi') {
    return (
      <div className="space-y-3 font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
              UPI
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{scenario.senderName}</p>
              <p className="text-[10px] text-slate-500 font-mono">{scenario.senderHandleOrNumber}</p>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            Collect Request
          </span>
        </div>

        {/* UPI Transaction Card */}
        <div className="rounded-2xl bg-white border-2 border-emerald-500/60 p-4 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Requested Amount</span>
            <span className="text-xl font-black text-slate-900 font-mono">
              {scenario.attachment?.amount || '₹ 1,499.00'}
            </span>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
            {scenario.messageText}
          </p>

          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2 text-[11px] text-amber-800 font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Asks you to enter your UPI PIN to approve</span>
          </div>
        </div>
      </div>
    );
  }

  // SMS Style (Default)
  return (
    <div className="space-y-3 font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
            SMS
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">{scenario.senderName}</p>
            <p className="text-[10px] text-slate-500 font-mono">{scenario.senderHandleOrNumber}</p>
          </div>
        </div>
        <span className="text-[10px] text-slate-400">{scenario.timestamp}</span>
      </div>

      <div className="max-w-[94%] rounded-2xl bg-slate-100 text-slate-900 p-3.5 shadow-sm border border-slate-200 space-y-2">
        <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed text-slate-800">
          {scenario.messageText}
        </p>

        {scenario.attachment && (
          <div className="mt-2 p-2.5 rounded-xl bg-white border border-slate-200">
            <p className="text-xs font-mono font-semibold text-blue-600 truncate">
              {scenario.attachment.title}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {scenario.attachment.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
