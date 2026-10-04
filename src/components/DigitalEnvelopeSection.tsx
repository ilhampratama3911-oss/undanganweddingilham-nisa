import React, { useState } from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';
import { BankAccount } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface DigitalEnvelopeSectionProps {
  bankAccounts: BankAccount[];
}

export const DigitalEnvelopeSection: React.FC<DigitalEnvelopeSectionProps> = ({ bankAccounts }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <section id="amplop" className="relative py-20 px-4 bg-[#0F1511] border-t border-[#C9A86A]/20">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Tandha Asih / Amplop Digital</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Kado &amp; Tanda Kasih
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-lg mx-auto mt-2">
            Donga pangestu panjenengan sedaya sampun dados kado ingkang paling aji tumrap kula sakeluwarga. Nanging menawi kepareng paring tandha asih lumantar amplop digital, saged katur lumantar rekening ing ngandhap punika.
          </p>
          <BatikDivider className="my-4" />
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bankAccounts.map((account) => (
            <div
              key={account.id}
              className={`p-6 sm:p-7 rounded-3xl border border-[#C9A86A]/30 bg-gradient-to-br ${account.colorTheme} shadow-2xl relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Decorative chip & logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-8 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 opacity-80 border border-amber-300" />
                <span className="font-display text-lg tracking-wider text-white font-bold">
                  {account.bankName}
                </span>
              </div>

              {/* Account Number & Name */}
              <div className="my-3">
                <p className="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
                  Nomor Rekening
                </p>
                <div className="font-mono text-xl sm:text-2xl text-white tracking-widest font-semibold my-1">
                  {account.accountNumber}
                </div>
                <p className="text-xs text-stone-300 font-serif-jawa mt-1">
                  Atas Nama: <strong className="text-amber-200">{account.accountHolder}</strong>
                </p>
              </div>

              {/* Copy Button */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => copyToClipboard(account.accountNumber, account.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#121814] bg-[#ECCB85] hover:bg-white transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedId === account.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
                      <span>Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
