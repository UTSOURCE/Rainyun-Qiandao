import tempfile
import unittest
from pathlib import Path

from rainyun.data import Account, DataStore


class DataStoreTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = tempfile.TemporaryDirectory()
        self.data_path = Path(self.temp_dir.name) / "config.json"

    def tearDown(self) -> None:
        self.temp_dir.cleanup()

    def test_load_creates_default(self) -> None:
        store = DataStore(self.data_path)
        data = store.load()
        self.assertTrue(self.data_path.exists())
        self.assertEqual(data.accounts, [])
        self.assertTrue(data.settings.auth.enabled)
        self.assertEqual(data.settings.auth.password_hash, "")
        self.assertIn("token", data.settings.auth.to_dict())

    def test_add_update_delete_account(self) -> None:
        store = DataStore(self.data_path)
        store.load()
        account = Account(id="acc_1", name="主账号", enabled=True, renew_products=[1], last_status="success")
        store.add_account(account)
        self.assertEqual(store.get_account("acc_1").name, "主账号")

        updated = Account(id="acc_1", name="副账号", enabled=False)
        store.update_account(updated)
        self.assertEqual(store.get_account("acc_1").name, "副账号")
        self.assertFalse(store.get_account("acc_1").enabled)

        deleted = store.delete_account("acc_1")
        self.assertTrue(deleted)
        self.assertIsNone(store.get_account("acc_1"))

    def test_duplicate_id_rejected(self) -> None:
        store = DataStore(self.data_path)
        store.load()
        store.add_account(Account(id="acc_1"))
        with self.assertRaises(ValueError):
            store.add_account(Account(id="acc_1"))

    def test_save_and_reload(self) -> None:
        store = DataStore(self.data_path)
        store.load()
        store.add_account(Account(id="acc_1", name="主账号"))

        reloaded = DataStore(self.data_path)
        data = reloaded.load()
        self.assertEqual(len(data.accounts), 1)
        self.assertEqual(data.accounts[0].id, "acc_1")


if __name__ == "__main__":
    unittest.main()
