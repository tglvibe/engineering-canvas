import { useState } from "react";
import { Key, CheckCircle } from "lucide-react";
import { updateAdminPassword, getAllUsers } from "@/data/store";

export default function AdminSettings() {
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const admin = getAllUsers().find(u => u.role === "admin");
    if (!admin || admin.password !== currentPwd) {
      setError("Current password is incorrect");
      return;
    }
    if (newPwd.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }
    if (newPwd !== confirmPwd) {
      setError("Passwords do not match");
      return;
    }

    updateAdminPassword(newPwd);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const inputClass = "w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your admin account</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Key className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Change Password</h2>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4 max-w-sm">
          {error && <p className="text-sm text-destructive bg-destructive/5 p-2.5 rounded-lg">{error}</p>}
          {success && (
            <div className="flex items-center gap-2 text-sm text-primary bg-primary/5 p-2.5 rounded-lg">
              <CheckCircle className="w-4 h-4" /> Password updated successfully
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Current Password</label>
            <input type="password" value={currentPwd} onChange={e => setCurrentPwd(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">New Password</label>
            <input type="password" value={newPwd} onChange={e => setNewPwd(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Confirm New Password</label>
            <input type="password" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} className={inputClass} />
          </div>

          <button type="submit" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">
            Update Password
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Admin Credentials</h2>
        <p className="text-sm text-muted-foreground mb-3">Default login credentials for the admin console:</p>
        <div className="bg-secondary/50 rounded-xl p-3 font-mono text-sm space-y-1">
          <p><span className="text-muted-foreground">Email:</span> <span className="text-foreground">admin@talenciaglobal.com</span></p>
          <p><span className="text-muted-foreground">Password:</span> <span className="text-foreground">(set by you)</span></p>
        </div>
      </div>
    </div>
  );
}
